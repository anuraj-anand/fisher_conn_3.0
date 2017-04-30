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
      $scope.signup = {};
      $scope.recover = {};

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
      $scope.edit={};
 
 

    $ionicModal.fromTemplateUrl('templates/changePassword.html', {
        scope: $scope
      }).then(function(modal) {
         $scope.modalChange = modal;
      });




    $ionicModal.fromTemplateUrl('templates/editProfile.html', {
        scope: $scope
      }).then(function(modal) {
         $scope.modalEdit = modal;
      });


     
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



    $scope.Signup = function() {


    $scope.signup.username;
    $scope.signup.email;
    $scope.signup.phoneno;
    $scope.signup.value;
    $scope.signup.type;
    $scope.signup.password;
    //console.log(""+JSON.stringify($("#loader").show());
    $("#loader").show();
    alert("Inside the Signup call username--"+JSON.stringify($scope.signup.username));
    alert("Inside the Signup email call"+JSON.stringify($scope.signup.email));
    alert("Inside the Signup phone call"+JSON.stringify($scope.signup.phoneno));
    alert("Inside the Signup phone call"+JSON.stringify($scope.signup.password));
    alert("Inside the Signup checkbox call"+JSON.stringify($scope.signup.value));
    alert("Inside the Signup customer type call"+JSON.stringify($scope.signup.type));
    var api_register_uri="http://127.0.0.1:8000/rest-auth/registration/";        



var dataObj = {
        username : $scope.signup.username,
        email : $scope.signup.email,
        password1 : $scope.signup.password,
        password2:$scope.signup.password
    };  
    var res = $http.post(api_register_uri, dataObj);
    res.success(function(data, status, headers, config) {
      $scope.message = data;
alert("successs"+$scope.message);

            var alertPopup = $ionicPopup.alert({
                title: 'Successfully Registered',
                template: data.username
            });
$("#loader").hide();

    });
    res.error(function(data, status, headers, config) {
     alert( "failure message status: " + JSON.stringify(status));
     alert( "failure message data: " + JSON.stringify(data));

          

    
            var alertPopup = $ionicPopup.alert({
                title: 'Signup failed!',
                template: data.username
            });status
  
      $("#loader").show();
    }); 


    }






    $scope.EditSave = function() {


    $scope.edit.firstname;
    $scope.edit.lastname;
    $scope.edit.gender;
    $scope.edit.birthdate;
    $scope.edit.email;
    $scope.edit.phoneno;
    $scope.edit.currency;
    $scope.edit.address;
    $scope.edit.yourself;
    //console.log(""+JSON.stringify($("#loader").show());
    //$("#loader").show();
    alert("Inside the edit.firstname--"+JSON.stringify($scope.edit.firstname));
    alert("Inside the edit.lastname"+JSON.stringify($scope.edit.lastname));
    alert("Inside the gender"+JSON.stringify($scope.edit.gender));
    alert("Inside the birthdate"+JSON.stringify($scope.edit.birthdate));
    alert("Inside the email"+JSON.stringify($scope.edit.email));
    alert("Inside the phone"+JSON.stringify($scope.edit.phoneno));
    //var api_register_uri="http://127.0.0.1:8000/rest-auth/registration/";        



var dataObj = {
        username : $scope.signup.username,
        email : $scope.signup.email,
        password1 : $scope.signup.password,
        password2:$scope.signup.password
    }; 



/*    var res = $http.post(api_register_uri, dataObj);
    res.success(function(data, status, headers, config) {
      $scope.message = data;
alert("successs"+$scope.message);

            var alertPopup = $ionicPopup.alert({
                title: 'Successfully Registered',
                template: data.username
            });
$("#loader").hide();

    });
    res.error(function(data, status, headers, config) {
     alert( "failure message status: " + JSON.stringify(status));
     alert( "failure message data: " + JSON.stringify(data));

          

    
            var alertPopup = $ionicPopup.alert({
                title: 'Signup failed!',
                template: data.username
            });status
  
      $("#loader").show();
    }); 
*/

    }

 






   $scope.Recover = function() {

     $scope.recover.email;
    
    //console.log(""+JSON.stringify($("#loader").show());
    $("#loader").show();
    alert("Inside the Recover email call"+JSON.stringify($scope.recover.email));
    var api_register_uri="http://127.0.0.1:8000/rest-auth/password/reset/";        



var dataObj = {
        
        email : $scope.recover.email,
        
    };  
    var res = $http.post(api_register_uri, dataObj);
    res.success(function(data, status, headers, config) {
      $scope.message = data;
    alert("successs"+$scope.message);

            var alertPopup = $ionicPopup.alert({
                title: 'Recover link sent over the email!!!',
                template: data.username
              });
      $("#loader").hide();

    });
    res.error(function(data, status, headers, config) {
     alert( "failure message status: " + JSON.stringify(status));
     alert( "failure message data: " + JSON.stringify(data));

          

    
            var alertPopup = $ionicPopup.alert({
                title: 'Unable to send recover link!! Please retry!!',
                template: data.username
            });status
  
      $("#loader").show();
    }); 

}
    $scope.dashboardLoad=function() {

   $("#loader").show();
   
   // alert("Inside the DAshboarddd");
  
      $http.get(dashboardapi,{
         
          })
        .success(function(data){
            $scope.product=data;
        $("#loader").hide();


        })
        .error(function(data){


           $("#loader").hide();
            alert("==error=="+JSON.stringify(data));
        }); 

  //       alert("$scope.itemlistvvvv"+JSON.stringify($scope.itemlist));



        //console.log('Selected rating is : ', rating);
      }



$scope.listDetail=[];
$scope.itemlist=[

{name:$scope.test.productname,id:$scope.test.productid,price:$scope.test.productprice}


];

/*local
var api_login_uri="http://127.0.0.1:8000/userandaccess/users/1/?format=json";
var esslerloginapi="http://127.0.0.1:8000/userandaccess/users/2/?format=json";
*/

var api_login_uri="https://dry-woodland-53830.herokuapp.com/userandaccess/users/1/";
var esslerloginapi="https://dry-woodland-53830.herokuapp.com/userandaccess/users/2/";


/*var dashboardapi="http://127.0.0.1:8000/userandaccess/Products/?format=json";*/

var dashboardapi="https://dry-woodland-53830.herokuapp.com/userandaccess/Products/?format=json";
$scope.loginSubmit = function() {


$("#loader").show();


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
          //  alert("==success=="+JSON.stringify(data));

            $("#loader").hide();
            if(data.username==$scope.data.username)
            {
             $state.go('home');
            }
            else
            {

              //  alert("Inside the Failed");
              /*
            $state.go('login');*/

            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
            }

        })
        .error(function(data){

          var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });

             $("#loader").hide(); 
            //alert("==error=="+JSON.stringify(data));
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


    $scope.changePassword = function(){
$scope.modalChange.show();

      //alert("In the Change Password");

    }

$scope.editProfile = function(){
$scope.modalEdit.show();

      //alert("In the Change Password");

    }





$scope.loginEsseler = function() {

$("#loader").show();

 // alert("Inside the Esseler Login");



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
           // alert("==success=="+JSON.stringify(data));


            if(data.username==$scope.data.username)
            {
              $("#loader").hide();

             $state.go('Esellerhome');
            }
            else
            {
             $("#loader").hide();
            //alert("Inside the Failed");
            $state.go('login');
            }

        })
        .error(function(data){


            $("#loader").hide(); 
            //alert("==error=="+JSON.stringify(data));
        }); 


}

})


.controller('EsellerCntl', function($scope, LoginService, $ionicPopup, $state,$stateParams, $ionicSideMenuDelegate, $http,$ionicModal) {

$scope.choice={};



var product_url="http://127.0.0.1:8000/admin/UserAndAccess_App/product/add/";
      $scope.pushtodatabse = function() {

      $scope.choice.qty, $scope.choice.price
      $scope.choice.selectedName

     //   alert("test function"+JSON.stringify($scope.choice));
      
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
          //  alert("==success=="+JSON.stringify(data));


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
