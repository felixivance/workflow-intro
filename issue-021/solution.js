// implement your solution here

function oldAndYoung(students) {
	
   var Ages ={};
   var AgesArray =[];
   

for(var i in students)
   {
      AgesArray[i]=students[i].yearOfBirth;
  }

students.forEach(function(details)
{
  if(details.yearOfBirth==Math.max(...AgesArray))
      {
        Ages.youngest = details.name;
      }
      else if(details.yearOfBirth==Math.min(...AgesArray))
      {
        Ages.oldest = details.name;
      }
  });

      return Ages;
}
//testing
/*
var ans = oldAndYoung([
  { name: 'Jane', yearOfBirth: 1945 },
  { name: 'John', yearOfBirth: 1978 },
  { name: 'Jackie', yearOfBirth: 2009 },
  { name: 'James', yearOfBirth: 2017 }
]);
*/
//console.log(ans);
