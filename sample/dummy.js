// 출처: https://minder97.tistory.com/entry/Nodejs-에서-express-모듈-사용하기 [눈, 그 깊은 심연]

var DummyDB = (function () {
    //변수를 선언한다.
    var DummyDB = {};
    var storage = [];
    var count = 1;

    //메서드를 구현한다.
    DummyDB.get = function (id) {
        if (id) {
            //변수를 가공한다.
            id = (typeof id == 'string') ? Number(id) : id;

            //데이터를 선택한다.
            for (var i in storage) if (storage[i].id == id) {
                return storage[i];
            }
        } else {
            return storage;
        }
    };

    DummyDB.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function (id) {
        //변수를 가공한다.
        id = (typeof id == 'string') ? Number(id) : id;

        //제거한다.
        for (var i in storage) if (storage[i].id == id) {
            //데이터를 제거한다.
            storage.splice(i, 1);

            //리턴한다 : 데이터 삭제 성공
            return true;
        }

        //리턴한다 : 데이터 삭제 실패
        return false;
    };

    //리턴한다.
    return DummyDB;
})();

var testDB = (function () {
    var testDB = {};

    testDB.val = 'test';

    testDB.test = ()=>{
        return ture;
    };

    return testDB;
})();