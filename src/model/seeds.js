
import {role, user,plate, state, order, orderplate } from './dbInitialize.js'

export const defaultDbValues = async () => {


    /* IF USER ROLE EXITS IT MEANS THIS INITIAL DATA WAS ALREADY CREATED */
    const validateInitialInsertion = await role.findOne({
        where:{
            name: 'User'
        }
    })

    if(validateInitialInsertion){
        console.log('success')
        return
    }
    
    const defaultRoles =[ ['Admin'],[ 'User']]

    const defaultUser = [
        ['hellenflash', 'Hellen Nicolle', 'hellen@hotmail.com', '15648948', 'Bogota las Américas piso2 apt 301', 'melo123'],
        ['tsweetheart', 'daniel carvajal', 'daniel@hotmail.com', '5464564', 'Bucaramanga Santander Holliday inn apt 503', 'sara12', 1]
    ]

    const defaultFoodPlates = [
        ['Lasagna Méxicana en salsa de pollo', 25, 'Deliciosa Lasagna mixta méxicana con toque de picante y verduras', 'https://unsplash.com?lasagna'],
        ['Hamburguesa de la casa', 10, 'Hamburguesa triple carne con doble queso y verduras acompañada de cascos fritos', 'https://unsplash.com?hamburguesa'],
        ['Arroz chino', 20, ' Bowl de arroz chino con pollo, carne, cerdo, verduras, maiz, y raices chinas', 'https://unsplash.com?arrozchino'],
        ['Calamar al vapor con caldo de sirena', 45, 'El don de cada sirena es encantar a los demás', 'https://unsplash.com?calamar'],
        ['Huevo frito con sal', 8, 'Delicioso huevo semicocido con especias', 'unsplash.com/500x500/?huevo'],
        ['Croquetas de pollo con mordiscos de pejelagarto', 30, ' te aseguramos una experiencia inolvidable', 'https://unsplash.com?croquetas']
    ]

    const defaultState= [
        ['Pending'],['Sent'],['Cancelled'],['Received']
    ]

    const defaultOrders= [
        [115, 'Paypal', 1],
        [560, 'Paypal', 2]
    ]

    const defaultOrderPlates = [
        [1, 1, 3], [1 ,2, 4],
        [2, 3, 1], [2, 5, 12]
    ]

    // /* INITIAL VALUES */
    defaultRoles.forEach(element => {
        role.create({ name: element[0] })
    })

    defaultUser.forEach(element => {
        user.create({
            nickname: element[0], name: element[1], email: element[2],
            phonenumber: element[3], adress: element[4], password: element[5], roleId: element[6]
        })
    })

    defaultFoodPlates.forEach(element => {
        plate.create({
            name: element[0], price: element[1], description: element[2], img: element[3]
        })
    })

    defaultState.forEach(element=>{
        state.create({name:element[0]})
    })

    defaultOrders.forEach(element =>{
        order.create({
            total: element[0], payMethod: element[1], userId: element[2]
        })
    })

    defaultOrderPlates.forEach(element =>{
        orderplate.create({
            orderId: element[0], plateId: element[1], quantity: element[2]
        })
    })
}


    // const insertDefaultValues = async (arrayName, model, values) => {

    //     let createValues;

    //     // for await (let [value,index] of values.entries()) {
    //     //     createValues+= `${value[index]} : element[${index}], `
    //     // }

    //     values.forEach(async (element,index) => {
    //         createValues += `${element} : element[${index}], `
    //     })

    //     // arrayName.forEach( () => {
    //     //     model.create({
    //     //         eval(createValues)
    //     //     })
    //     // })

    //     return createValues
    // }