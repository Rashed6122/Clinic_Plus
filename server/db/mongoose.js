const mongoose =  require('mongoose')
mongoose
  .connect(
    'mongodb+srv://1517002:rashed@clinicx.zyucjz0.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Sucessful Connection'))
  .catch((err) => console.log(err));