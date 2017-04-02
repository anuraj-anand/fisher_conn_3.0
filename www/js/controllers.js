angular.module('starter.controllers', [])

.controller ('AppCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);    
}])


.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state,$stateParams, $ionicSideMenuDelegate, $http,$ionicModal,$ionicScrollDelegate) {
 
      $scope.data = {};
      $scope.test = {};
      $scope.product = [];
      $scope.itemlist=[];
      $scope.value = 0;
      $scope.ball = 0;


       $scope.itemTotal=[];
       $scope.shipcharge=0;
      $scope.totaloutstand=0;

        $scope.tax=0;
        $scope.count=0;
        $scope.cnt=0;
        $scope.itemgroup=[];
        $scope.itemfish=[];
        $scope.itemfish.fishname=0;
        $scope.fishprice=0;
        $scope.itemfish.fishid=0;
        $scope.itemfish.fishprice=0; 


   

    $ionicModal.fromTemplateUrl('templates/cart.html', {
        scope: $scope
      }).then(function(modal) {
         $scope.modal = modal;
      });

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }

   

      $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  3,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      }

      $scope.ratingsCallback = function(rating) {
        //console.log('Selected rating is : ', rating);
      }



    $scope.dashboardLoad=function() {


   // alert("Inside the DAshboarddd");
  
      $http.get(dashboardapi,{
         
          })
        .success(function(data){
            $scope.product=data;


   /* for(var i=0;i<data.length;i++)
    {*/
    /*$scope.product=$scope.test[i].productid;*/
/*

    $scope.product.push($scope.test[i].productid); 
    $scope.product.push($scope.test[i].productname); 
    $scope.product.push($scope.test[i].productdesc); 
    $scope.product.push($scope.test[i].productprice);     
    }*/
            

    alert("==success=="+JSON.stringify($scope.product));

//var values = {name: 'misko', gender: 'male'};
// var itemlist = [];
// angular.forEach(data, function(value, key) {
//     alert("--"+key);
//     alert("value"+JSON.stringify(value));
//   itemlist.push(itemlist + ': ' + value);
// }, itemlist);



/*$scope.itemlist=[
    
           {id:data.productid,name:data.productname,price:data.productprice,desc:data.productdesc}

           ];
*/




/*
          $scope.itemlist=[

           {id:data.productid,name:data.productname,price:data.productprice,desc:data.productdesc}

           ];*/
//            alert("==success=="+JSON.stringify(data));

        })
        .error(function(data){

            alert("==error=="+JSON.stringify(data));
        }); 

  //       alert("$scope.itemlistvvvv"+JSON.stringify($scope.itemlist));



        //console.log('Selected rating is : ', rating);
      }











$scope.listDetail=[];
$scope.itemlist=[

{name:$scope.test.productname,id:$scope.test.productid,price:$scope.test.productprice}


];

/*$scope.itemlist=[

{name:'Rehu',id:'Fresh Water Rehu',price:400},
{name:'Katla',id:'Katla Fresh Water',price:200},
{name:'Pompfret',id:'Pompfret sea fresh',price:950},
{name:'Illis',id:'Iillis Fresh Mach',price:100}


];

*/
/*$scope.itemlist=[
$scope.itemlist=[

{name:'Rehu',id:'Fresh Water Rehu',price:400},
{name:'Katla',id:'Katla Fresh Water',price:200},
{name:'Pompfret',id:'Pompfret sea fresh',price:950},
{name:'Illis',id:'Iillis Fresh Mach',price:100}


];
{name:'Rehu',id:'Fresh Water Rehu',price:400},
{name:'Katla',id:'Katla Fresh Water',price:200},
{name:'Pompfret',id:'Pompfret sea fresh',price:950},
{name:'Illis',id:'Iillis Fresh Mach',price:100}


];*/

/*local
var api_login_uri="http://127.0.0.1:8000/userandaccess/users/1/?format=json";
var esslerloginapi="http://127.0.0.1:8000/userandaccess/users/2/?format=json";
*/

var api_login_uri="https://dry-woodland-53830.herokuapp.com/userandaccess/users/1/";
var esslerloginapi="https://dry-woodland-53830.herokuapp.com/userandaccess/users/2/";


/*var dashboardapi="http://127.0.0.1:8000/userandaccess/Products/?format=json";*/

var dashboardapi="https://dry-woodland-53830.herokuapp.com/userandaccess/Products/?format=json";
$scope.loginSubmit = function() {

$scope.data.username, $scope.data.password

//alert("Inside the Login Submit call"+$scope.data.username);
//alert("password"+$scope.data.password)
/*var fd={
username:"fisherconnteam",
email:"admin@fisherconn.com",
password:"12345"

};*/


// Triggered in the login modal to close it
  
//alert("===="+JSON.stringify(fd));

    $http.get(api_login_uri,{
         
        })
        .success(function(data){
            alert("==success=="+JSON.stringify(data));


            if(data.username==$scope.data.username)
            {
             $state.go('home');
            }
            else
            {

                alert("Inside the Failed");
            $state.go('login');
            }

        })
        .error(function(data){

            alert("==error=="+JSON.stringify(data));
        }); 


}


  

$scope.orderhistory = function() {

//  alert("--orderhistory--")
        $state.go('orders');
        }

    $scope.forgotpassword = function() {
        $state.go('forgot');
        }

    $scope.logout = function() {

     $scope.modal.hide();
        alert("kjgk");
         $state.go('login');
        
            }

    $scope.toggleLeft = function() {
   
        $ionicSideMenuDelegate.toggleLeft();        
    }

    $scope.cart = function(item) {

      
      //alert("Product"+JSON.stringify(item));
    $scope.fishprice=0;   

    $scope.itemgroup.push(item);    

//alert("Product After Push"+JSON.stringify($scope.itemgroup));

//alert("$scope.itemgroup"+$scope.itemgroup.length);
//alert("COunt"+$scope.itemfish.length-1)

    $scope.count=$scope.itemgroup.length;

//alert("==counttttt="+$scope.count);

//$scope.finalprice=0;
   for(var i=0;i<$scope.itemgroup.length;i++)
  {

    $scope.fishprice=Number($scope.fishprice)+Number($scope.itemgroup[i].productprice);

//alert("==price="+$scope.fishprice);

  }

$scope.shipcharge=$scope.fishprice*(0.02);
$scope.tax=$scope.fishprice*(0.05);
//alert("$scope.shipcharge"+$scope.shipcharge);
//alert("$scope.tax"+$scope.tax);
$scope.totaloutstand=$scope.tax+$scope.shipcharge+$scope.fishprice;


//alert("==After="+$scope.fishprice);

//alert("COUNTTT"+$scope.count);
   /* $scope.finalArray($scope.itemchanged);*/

$scope.itemfish.fishname=item.productname;

$scope.itemfish.fishid=item.productid;
$scope.itemfish.fishprice=item.productprice; 


     $scope.itemfish=[
    {name:$scope.itemfish.fishname,
    id:$scope.itemfish.fishid,
    price:$scope.itemfish.fishprice}
          
       ];

$scope.itemTotal.push($scope.itemfish);
$scope.cnt=$scope.itemTotal.length;





//alert("=="+$scope.totaloutstand);

    }

      
 

// For the Count
    $scope.getTotalItems=function() {

            var count = 0;
            return count;
  }

  
    $scope.signup = function() {
    
       $state.go('signup');
        
    }

    $scope.cancelButton = function() {

   // alert("inside the close");
      $scope.modal.hide();
  }

    $scope.sideAcctSett = function() {
      
      $state.go('setting');
        
    }

    $scope.shoppingbag = function(){


      $scope.modal.show();

    }

    $scope.add = function(qty){
      alert("selectedvalue"+qty);

$scope.value=qty+1;

      alert("selectedvalue"+$scope.value);

    }




    $scope.shippingDetails = function(){


      $state.go('shipping');

    }
$scope.loginEsseler = function() {


  alert("Inside the Esseler Login");



//alert("Inside the Login Submit call"+$scope.data.username);
//alert("password"+$scope.data.password)
/*var fd={
username:"fisherconnteam",
email:"admin@fisherconn.com",
password:"12345"

};*/


// Triggered in the login modal to close it
  
//alert("===="+JSON.stringify(fd));

    $http.get(esslerloginapi,{
        })
        .success(function(data){
            alert("==success=="+JSON.stringify(data));


            if(data.username==$scope.data.username)
            {
             $state.go('Esellerhome');
            }
            else
            {

            alert("Inside the Failed");
            $state.go('login');
            }

        })
        .error(function(data){

            alert("==error=="+JSON.stringify(data));
        }); 


}







})


.controller('EsellerCntl', function($scope, LoginService, $ionicPopup, $state,$stateParams, $ionicSideMenuDelegate, $http,$ionicModal) {

$scope.choice={};



var product_url="http://127.0.0.1:8000/admin/UserAndAccess_App/product/add/";
      $scope.pushtodatabse = function() {



     
      $scope.choice.qty, $scope.choice.price
      $scope.choice.selectedName

       

        alert("test function"+JSON.stringify($scope.choice));
      
        //console.log('Selected rating is : ', rating);
      }


$scope.loginEsseler = function() {


  alert("Inside the Esseler Login");



//alert("Inside the Login Submit call"+$scope.data.username);
//alert("password"+$scope.data.password)
/*var fd={
username:"fisherconnteam",
email:"admin@fisherconn.com",
password:"12345"

};*/


// Triggered in the login modal to close it
  
//alert("===="+JSON.stringify(fd));

    $http.get(esslerloginapi,{
        })
        .success(function(data){
            alert("==success=="+JSON.stringify(data));


            if(data.username==$scope.data.username)
            {
             $state.go('Esellerhome');
            }
            else
            {

            alert("Inside the Failed");
            $state.go('login');
            }

        })
        .error(function(data){

            alert("==error=="+JSON.stringify(data));
        }); 


}


$scope.choices = [{id: 'choice1'}];
  
  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
    
  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };










})














