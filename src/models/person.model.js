'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Person = function (person) {
    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.cnic = employee.cnic;
    this.rent_total = employee.rent_total;
    this.aggrement_start_date = employee.aggrement_start_date;
    this.aggrement_end_date = employee.aggrement_end_date;
    this.amount_cllection_month = employee.amount_cllection_month;
    this.collected_rent = employee.collected_rent;
    this.e_bill = employee.e_bill;
    this.g_bill = employee.g_bill;

};

Person.create = function (newPerson, result) {
    dbConn.query("INSERT INTO person set ?", newPerson, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Person.findById = function (id, result) {
    dbConn.query("Select * from person where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Person.findAll = function (result) {
    dbConn.query("Select * from person", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
Person.update = function (id, person, result) {
    dbConn.query("UPDATE person SET firstname=?,lastname=?,cnic=?,rent_total=?,aggrement_start_date=?,aggrement_end_date=?,amount_cllection_month=?,collected_rent=?,e_bill=?,g_bill=?, WHERE id = ?", [person.firstname, person.lastname, employee.cnic, employee.rent_total, employee.aggrement_start_date, employee.aggrement_end_date, employee.amount_cllection_month, employee.collected_rent, employee.e_bill, employee.g_bill, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Person.delete = function (id, result) {
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Person;