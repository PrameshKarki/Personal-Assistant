// *Import require modules
const path=require("path");

const notifier=require("node-notifier");
const schedule=require("node-schedule");

// *JOB Definition
const job=schedule.scheduleJob("*/30 * * * *",()=>{
      notifier.notify({
        title:"Hi Pramesh,Time to Drink Water",
        message:"Drinking water is very important to keep our body hydrated,so please keep drinking water.Water is very important for our body.",
        icon: path.join(__dirname,"images","water.jpg"),
        sound:true,
        wait:true

      })
});