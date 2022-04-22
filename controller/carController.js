const  {cars} = require('../models')
const db = require("../models");
const Op = db.Sequelize.Op;
const { request } = require('../app');

module.exports = class {
    static addCAR(req, res, next) {
        cars.create({
            nama: req.body.nama,
            tarif: req.body.tarif,
            ukuran: req.body.ukuran,
            foto: req.body.foto
        })
            .then((result) => {
                // res.status(201).send({
                //     status: 201,
                //     message: 'Data Car Dibuat',
                //     data: result,
                // })
                res.render("index-addCar")
            })
            .catch((err) => {
                res.status(500).send(err)
  
            })
 
    } 
    static getAllCar(req, res, next) {
        cars.findAll()
         .then((result) => {
        //      res.status(201).send({
        //          status: 200,
        //          message: 'All Car',
        //          data: result,
        //      })
            res.render("index",{data:result})
         })
         .catch((err) => {
             res.status(500).send(err)
         })
        }
        static deleteCar(req, res, next) {
            cars.findByPk(req.params.id)
                 .then((result) => {
                 return result
                 .destroy()
                 .then((result) => {
                    res.status(201).send({
                    status: 201,
                    message: 'Data Car Dihapus'
                                })
                            })
                    .catch((error) => res.status(400).send(error));
                        })
           .catch((err) => {
               res.status(500).send(err)
              })
                      
           }
           static updateCar(req, res, next) {
            cars.update({
                ...req.body
            },{
                where: {
                    id: req.params.id
                },
                returning: true,
            })
                .then((result) => {
                  res.status(201).send({
                    status: 201,
                    message: 'Data Car diupdate!',
                    data: result,
                })
            })
                .catch((err) => {
                    res.status(500).send(err)
                })

  }
  static getCar(req, res, next) {
    const nama = req.query.nama;
    var condition = nama ? { nama: { [Op.like]: `%${nama}%` } } : null;
    cars.findAll({ where: condition })
       .then((result) => {
        //    res.status(201).send({
        //      status: 200,
        //      message: 'Data Car Ditemukan!',
        //      data: result,
        //         })
        res.render("index-updateCars")
             })
          .catch((err) => {
              res.status(500).send(err)
              })
          }
          static ukuranCar(req, res, next) {
        
            cars.findAll({ where: req.query })
                 .then((result) => {
                  
                    //  res.status(201).send({
                    //      status: 200,
                    //      message: 'Data Car ditemukan!',
                    //      data: result,
                    //  })
       
                   res.render('index',{data:result});
                 })
                 .catch((err) => {
                     res.status(500).send(err)
                 })
       
               
               }
}