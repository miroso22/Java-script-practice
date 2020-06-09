'use strict';

const MAX_OF_POPULAR = 5;

function User(name, surname, age) {
  return {name, surname, age};
}

function cacheUser(fn) {
  const popular = new Map();
  const cached = new Map();

  let upToDate = false;
  let leastOfPopular = {};
  let leastKey = "";

  function makeCache(...args) {
    return args.join('|');
  }

  function setLeastOfPopular() {
    for (let key of popular.keys()) {
      const elem = popular.get(key);
      if (elem.calls < leastOfPopular.calls || !leastOfPopular) {
        leastOfPopular = elem;
        leastKey = key;
      }
    }
  }

  return function(...args) {
    const key = makeCache(...args);

    let res = popular.get(key); // Check in populars
    if (res) {
      res.calls++;
      upToDate = false;
      return res.user;
    }

    res = cached.get(key); // Check in cacheds
    if (res) {
      res.calls++;

      if (!upToDate) {
        setLeastOfPopular();
      }
      if (res.calls > leastOfPopular.calls) {
        popular.set(key, res);
        cached.set(leastKey, leastOfPopular);
        popular.delete(leastKey);
        cached.delete(key);
        setLeastOfPopular();
      }
      upToDate = true;

      return res.user;
    }

    const user = fn(...args);
    if (popular.size < MAX_OF_POPULAR) {
      popular.set(key, {user, calls: 1});
    } else {
      cached.set(key, {user, calls: 1});
    }
    return user;
  }
}

// Usage

const getUser = cacheUser(User);

getUser("1", "1", 2);
getUser("1", "1", 2);
getUser("2", "1", 2);
getUser("2", "1", 2);
getUser("3", "1", 2);
