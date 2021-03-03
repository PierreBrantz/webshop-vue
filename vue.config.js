

module.exports = {
    devServer:  {
       
      proxy: {
        "/": {
          target: "https://webshopbepi-app.herokuapp.com",
          
          
                    
        },
      }
    }
  }