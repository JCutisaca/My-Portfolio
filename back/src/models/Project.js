const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Project", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descriptionEnglish: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        descriptionSpanish: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gitHub: {
            type: DataTypes.STRING,
            allowNull: false
        },
        technologies: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}