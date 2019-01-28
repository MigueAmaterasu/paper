const pg=require('pg')
var config = {
	user:'Mike'
	database: 'DB'
	password:'secret'
	host:"localhost"
	port:'5432'

};
pool.on('error',function(err,client){
	console.error('idle client error',err.message,err.stack);
});
pool.querty('SELECT $1::int AS number',['2'], function(err,res){
	if (err){
		return console.error('error running query',err);

	}
console.log('number:', res.rows[0].number);
});
