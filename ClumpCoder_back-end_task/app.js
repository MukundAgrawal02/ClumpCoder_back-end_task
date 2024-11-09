const express = require('express');
const app = express();
const sequelize = require('./config/dbConfig');
const categoryRoutes = require('./routes/categoryRoutes');
const questionRoutes = require('./routes/questionRoutes');

app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/questions', questionRoutes);

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
