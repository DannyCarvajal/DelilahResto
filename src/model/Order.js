
export const orderModel= (sequelize,DataTypes) =>{
    
    const order = sequelize.define('order',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    total:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    payMethod:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'users',
            key: 'id'
        }
    },
    stateId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'states',
            key: 'id'
        }
    }
},{
    timestamps: false
})
    return order
}