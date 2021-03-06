'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Person = function (person) {
    this.receipt_no = person.receipt_no;
    this.firstname = person.firstname;
    this.phone_no = person.phone_no;
    this.cnic = person.cnic;
    this.rent_total = person.rent_total;
    this.aggreement_start_date = person.aggreement_start_date;
    this.aggreement_end_date = person.aggreement_end_date;
    this.amount_cllection_month = person.amount_cllection_month;
    this.collected_rent = person.collected_rent;
    this.e_bill = person.e_bill;
    this.g_bill = person.g_bill;
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
    dbConn.query("Select * from person where receipt_no = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Person.findByCNIC = function (nic, result) {
    dbConn.query("Select * from person where cnic = ? ", nic, function (err, res) {
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
            console.log('person : ', res);
            result(null, res);
        }
    });
};
Person.update = function (id, person, result) {
    console.log(typeof(id));
    const theId = parseInt(id)
    dbConn.query("UPDATE person SET firstname=?,phone_no=?,cnic=?,rent_total=?,aggreement_start_date=?,aggreement_end_date=?,amount_cllection_month=?,collected_rent=?,e_bill=?,g_bill=? WHERE receipt_no = ?", [person.firstname, person.phone_no, person.cnic, person.rent_total, person.aggreement_start_date, person.aggreement_end_date, person.amount_cllection_month, person.collected_rent, person.e_bill, person.g_bill, person.receipt_no], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Person.delete = function (id, result) {
    dbConn.query("DELETE FROM person WHERE id = ?", [id], function (err, res) {
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