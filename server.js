import express from 'express'
const app = express()
const port = 3000
// import cors from 'cors';


// app.use(cors());
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
   res.send("vrajdotcom")
})

app.get('/login',(req,res)=>{
    res.send("<h1>You're logged in</h1>")
 })

app.get('/github',(req,res)=>{
  const githubData=[
    {
      id: 1,
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      name: "Jane Smith",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Alice Johnson",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 4,
      name: "Bob Brown",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 5,
      name: "Charlie Davis",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})