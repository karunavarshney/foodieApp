
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
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/veganfinder', {
		templateUrl: 'pages/veg-nonveg.html',
		controller: 'vegancontroller'
	})
})

foodieApp.controller('mainController',function($scope) {
  // Here we are using the object variable that angular gave us to create a controller
  // In the first argument, we are passing the name of the controller we want to create
  // And in the second argument, we are passing the function we want the controller to do
  $scope.restaurants = [{
		id:'1',
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
            },
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	id:'2',
name: 'The Great Indian Pub',
address: '138/345, Rajpur Road, Jakhan, Dehradun',
location: 'Jakhan, Dehradun',
category: 'Casual Dining',
vote: '4.5',
cuisines: 'North Indian',
cost: '1,500',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
	name: 'Corn Pizza',
	image: 'https://thumb1.shutterstock.com/display_pic_with_logo/3471602/328659536/stock-photo-bhindi-masala-or-bhendi-masala-or-ladies-finger-fry-with-mixed-veg-in-red-curry-with-indian-roti-328659536.jpg'
          },
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_IoAYIQzXOvfI70jX7BS8iVMGR0qojO67rjB43afBBZ-qPAN'
},
{
	id:'3',
	name: 'Orchard',
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
	id:'4',
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
	id:'5',
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
	id:'6',
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
	id:'7',
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
	id:'8',
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


foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home');
	}
})


foodieApp.controller('restaurantController',function($scope,$routeParams,$http,$location) {

	$scope.restaurantId = $routeParams.id;
	$scope.nonveg=['egg','meat','Escargots','seafood','chicken','barbecue','trout','fillet','mackerel','smoked fish','salmon','pork','steak','sirloin','bacon','ham','tenderlion','fish'];
	var restaurants = [
		{
			name: 'Farzi Cafe',
			address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
			location: 'Connaught Place',
			category: 'Casual Dining, Bar',
			vote: '4.2',
			cuisines: 'Modern Indian',
			cost: '2200',
			hours: '12 Noon to 1 AM (Mon-Sun)',
				bestDish: {
					name: 'Kulfi',
					image: 'http://farki.in/images/kulfiandcandy/chocolate_kulfi.jpg'
				},
				Highlights:["Full Bar Available", "Outdoor Seating", "Smoking Area", "Luxury Dining" ],
				Featured_Collections:["Romantic"," Meat cravings", "Lake view"],
				Recommend:'Manchurian, Gatta Curry, Hara Bhara Kebab, Kulfi, Paneer Tikka Masala, Tomato Soup',
				image:'https://b.zmtcdn.com/data/pictures/2/18041442/f0046919f60d923d8ecb895950e9e338.jpg?output-format=webp'
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
				bestDish: {
					name: 'Corn Pizza',
					image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
				},
				Highlights:["Full Bar Available","Live Music","Wifi","Drinking Age Applicable","Smoking Area","Nightlife"],
				Featured_Collections:["Mordernized presentation of dishes with an elegant decor"],
				Recommend:'Keema Paratha, Paneer Makhani, Mocktails, Shisha, Milky Way, Tomato Soup, Sangria',
				image:'http://cdn.images.cunard.com/Global/Images/Ships/QM2/refit/inspiration-module/QM2-Queens-Grill-Restaurant.jpg'
		},
		{
			name: 'Orchard',
	     	address: '33 D, Dak Patti, Near Mdda Park',
			location: 'Rajpur',
			category: 'Casual Dining, Bar',
			vote: '4.2',
			cuisines: 'Modern Indian',
			cost: '800',
			hours: '12 Noon to 10PM (Mon-Sun)',
			Highlights:["Breakfast","Vegetarian Only","Wifi","Outdoor Seating"],
			Featured_Collections:["Rooftops"],
			Recommend:'Vada Pav, Mojito, Sauteed Mushrooms, Chai, Paneer Sandwich, Nachos, Falafe',
			image:'http://cjr7.com/wp-content/uploads/2011/07/Do-Restaurants-Attract-Theft.jpg'
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
			bestDish: {
				name: 'Nachos',
				image: 'https://omnomnomtreats.files.wordpress.com/2014/05/loaded-vegetarian-nachos1.jpg'
			},
			Highlights:["Home Delivery","Vegetarian Only","Live Music","Wifi","Live Sports Screening","Smoking Area"],
			Featured_Collections:["Known for Mexican Food"],
			Recommend:'Club Sandwich, Nachos, Coffee, Brownie, Mojito, Mexican Tart, Pinacolada',
			image:'https://b.zmtcdn.com/data/pictures/0/18400430/25f960835d2a4fde13976ca7ac13e7ad.jpg?output-format=webp'
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
			bestDish: {
				name: 'Alfrado Pasta',
				image: 'http://topsecretrecipes.com/images/P/olive-garden-alfredo-pasta-copycat-recipe.jpg'
			},
			Highlights:["Home Delivery","Wheelchair Accessible","Vegetarian Only","Smoking Area","Wifi","Desserts and Bakes","Outdoor Seating"],
			Featured_Collections:["Known for Italian"],
			Recommend:'Hazelnut Frappe, Slutty Brownie, Nachos, Hot Chocolate, Alfredo Pasta, Coffee, Mojito',
			image:'http://clossette.com/wp-content/uploads/Hirobun-Restaurant-Kawadoko-Dining-Kyoto-Kibune.jpg'
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
			bestDish: {
				name: 'French Vanila Coffee',
				image: 'https://cookinformycaptain.files.wordpress.com/2012/03/img_4426x.jpg'
			},
			Highlights:["Home Delivery","Wheelchair Accessible","Outdoor Seating"],
			Featured_Collections:["Known for variety of Coffee"],
			Recommend:'Shakes, Pasta, Mocktails, Coffee, Bruschettas, Waffles, Penne Alfredo',
			image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHrRNdXC-tz4plg2OxGDmX7rmqfLXcux5zQFgbuUIJmrvoQG0'
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
			bestDish: {
				name: 'Butter Chicken',
				image: 'http://www.akbarsown.com/wp-content/uploads/2015/05/butter-chicken-1.jpg'
			},
			Highlights:["Breakfast","Outdoor Seating","Wifi","Smoking Area"],
			Featured_Collections:["Rooftops"],
			Recommend:'Lal Maans, Butter Chicken, Palak Paneer, Gulab Jamun, Tandoori Chicken, Scrambled Eggs, Pakoda',
			image:'https://b.zmtcdn.com/data/pictures/9/18041439/4b8619e5f480c3486d79d9daf79bb743.jpg?output-format=webp'
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
			bestDish: {
				name: 'Pasta',
				image: 'http://www.thegoodshoppingguide.com/wp-content/uploads/2013/03/pasta.jpg'
			},
			Highlights:["Wheelchair Accessible","Wine and Beer","Valet Parking Available","Outdoor Seating"],
			Featured_Collections:["Romantic","Late night restaurants","Rooftops","Beer in bar"],
			Recommend:'Jalapeno Chicken, Waffles, Pasta, Risotto, Nachos, Beer, Spring Roll',
			image:'https://b.zmtcdn.com/data/pictures/6/100306/e1f5eb8c9bac9a7ee00e3be677a5fc8b.jpg?output-format=webp'
		}
	];
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.ingredients = [];
	$scope.findfoodtype = function(url) {

			var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
			$http({
				'method': 'POST',
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
				'headers': {
					'Authorization': 'Key effd836d777343bba78a5363d82a57d0',
					'Content-Type': 'application/json'
				},
				'data': data

				}).then(function (response) {
					var ingredients = response.data.outputs[0].data.concepts;
		   			var notveg=0;
			 		console.log(url);
					for (var i =0;i < ingredients.length;i++) {
						if(ingredients[i].value > 0.75){
							$scope.ingredients.push(ingredients[i].name);
							for(var j=0;j < $scope.nonveg.length; j++){
								if($scope.ingredients[i]==$scope.nonveg[j])
								{
									notveg=1;
									break;
								}
								else{
								notveg=0;
									// console.log('food is notveg');
								}
							}
						}
				if(notveg == 1)
				{
					console.log('food is notveg');
					$('.bestImage').addClass('nonveg');
					break;
				}
				else {
					console.log('food is veg');
					$('.bestImage').addClass('veg');
				}
			}
					}, function (xhr) {
				        	console.log(xhr);
							});
							$('.bestImage').removeClass('hidden');
							$('.ingredients').addClass('hidden');


	}
		$scope.ingredients1 = [];
		$scope.getingredients = function(url) {

			var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
			$http({
				'method': 'POST',
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
				'headers': {
					'Authorization': 'Key effd836d777343bba78a5363d82a57d0',
					'Content-Type': 'application/json'
				},
				'data': data

			}).then(function (response) {
					var ingredients1 = response.data.outputs[0].data.concepts;
					for (var i =0;i < ingredients1.length;i++) {
									$scope.ingredients1.push(ingredients1[i].name);
									console.log(ingredients1[i]);

							}
							// console.log(xhr);
				}, function (xhr) {
		        	console.log(xhr);
					// console.log('error');
					});
			$('.bestImage').addClass('hidden');
			$('.ingredients').removeClass('hidden');

		}

})

 foodieApp.controller('vegancontroller',function($scope){
 })
