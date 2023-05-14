const mongoose =  require('mongoose')
mongoose
  .connect(
    'mongodb+srv://1517002:rashed@clinicx.zyucjz0.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Sucessful Connnnnnnnnection'))
  .catch((err) => console.log(err));

