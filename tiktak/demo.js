db.users.aggregate([{
     $match:{}
    },
    {
        $group:{
            _id:0,
            numsalary:{
                salary:'$salary'
            },
            sumid:{
                $avg:"$_id"
            }
        }
}])

db.users.aggregate([{
    $match:{}
   },
   {
       $group:{
           _id:2,
           totalsalary:{
               $sum:"$salary"
       }
    }
}
])

db.users.aggregate([{
    $match:{}
   },
   {
       $group:{
           totalsalary:{
               $sum:"$salary"
       }
    }
}
])



db.newusers.insert([
    {
        _id:1,
        name:"deepak",
        salary:"30000"
    },
    {
        _id:2,
        joint:[{
                _id:3,
                name:"subham",
                salary:"40000"
        },
        {
            _id:4,
            name:"sobhesh",
            salary:"50000"
        }]
    },

])