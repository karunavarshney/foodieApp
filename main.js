
// run when html is loaded
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
})
foodieApp.controller('mainController',function($scope) {
  // Here we are using the object variable that angular gave us to create a controller
  // In the first argument, we are passing the name of the controller we want to create
  // And in the second argument, we are passing the function we want the controller to do
  $scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'The Great Indian Pub',
address: '138/345, Rajpur Road, Jakhan, Dehradun',
location: 'Jakhan, Dehradun',
category: 'Casual Dining',
vote: '4.5',
cuisines: 'North Indian',
cost: '1,500',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_IoAYIQzXOvfI70jX7BS8iVMGR0qojO67rjB43afBBZ-qPAN'
},
{name: 'Orchard',
address: '33 D, Dak Patti, Near Mdda Park',
location: 'Rajpur',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Modern Indian',
cost: '800',
hours: '12 Noon to 10PM (Mon-Sun)',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglZnpsXOyNKfxLb_FHlEI66CzJBbeRGsl5PB5_JgKOrA8Q7G1'
},
{
  name: 'Barbeque Nation',
	address: 'Chaudhary Plaza, Rajpur Road, Rajpur, Dehradun',
	location: 'Rajpur',
	category: 'Casual Dining, Bar',
	vote: '5',
	cuisines: 'North Indian, Mediterranean, Asian, Chinese',
	cost: '500',
	hours: '12 Noon to 3 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g'
},
{
  name: 'Kalsang Friends Corner',
	address: '88 A, Opposite Osho, Chander Lok Colony, Rajpur',
	location: 'Hathibarkala Salwala',
	category: 'Casual Dining, Bar',
	vote: '3',
	cuisines: 'Chinese, Thai, Tibetan',
	cost: '600',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEoeF2DFlQVPKLJxwQnO5ffVqJSSETv0cMrYIAm1NUD5KnjRq7w'
},
{
  name: 'Kalsang AMA Cafe',
	address: '88, Opposite Osho, Chander Lok Colony, Rajpur ',
	location: 'Rajpur',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Chinese, Thai, Tibetan',
	cost: '2000',
	hours: '12 Noon to 1:30 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zBygOQ0oaGpiUwvVSU-n6DP6XVJj_qeLcR4Z7rvstwdzqWIuDQ'
},
{
  name: 'Jalapenos',
	address: 'Mussourie Diversion, Pacific Hills,Rajpur Road',
	location: 'Rajpur',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Mexican',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg'
},
{
  name: 'First Gear Cafe',
	address: 'Khala Gaon, Near Shiv Mandir, Mussoorie road',
	location: 'Malsi',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '200',
	hours: '12 Noon to 1:30 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsOJ16RyLLqnQxRKmUtJHJMFOFpe5mJsTWl-AjMU4409dbMtpVw'
}
]
})


foodieApp.controller('loginController',function($scope) {
})
