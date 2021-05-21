
export const stateModel=(sequelize,DataTypes) =>{
    
    const state = sequelize.define('state',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    name:{
        type:DataTypes.ENUM('Pendiente', 'Enviado', 'Cancelado', 'Recibido'),
        allowNull: false
    }
},{
    timestamps:false
})  
    return state

}