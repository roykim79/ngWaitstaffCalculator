angular.module('myApp', [])
	.controller('WaitStaffCtrl', function($scope) {

		$scope.earningsTipTotal = 0;
		$scope.earningsMealCount = 0;
		$scope.earningsAvgTipPerMeal = 0;

		$scope.calculateSubtotal = function(base, taxRate){
			return base * (1 + taxRate/100);
		};
		$scope.calculateTip = function(base, tipPercent){
			return base * (tipPercent/100);
		};
		$scope.calculateTotal = function(base, taxRate, tipPercent){
			$scope.chargesSubtotal = $scope.calculateSubtotal(base, taxRate);
			$scope.chargesTip = $scope.calculateTip(base, tipPercent);
			$scope.chargesTotal = $scope.chargesSubtotal + $scope.chargesTip;
		};
		$scope.calculateEarnings = function(){
			$scope.earningsTipTotal += $scope.chargesTip;
			$scope.earningsMealCount += 1;
			$scope.earningsAvgTipPerMeal = $scope.earningsTipTotal / $scope.earningsMealCount;
		};
		$scope.clearMealDetails = function(){
			$scope.myForm.$setPristine();
			$scope.meal.basePrice = null;
			$scope.meal.taxRate = null;
			$scope.meal.tipPercentage = null;
		};
		$scope.clearCustomerCharges = function(){
			$scope.chargesSubtotal = null
			$scope.chargesTip = null;
			$scope.chargesTotal = null;
		};
		$scope.submit = function(base, taxRate, tipPercent){
			$scope.calculateTotal(base, taxRate, tipPercent);
			$scope.calculateEarnings();
			$scope.clearMealDetails();
		};
		$scope.reset = function(){
			$scope.earningsTipTotal = 0;
			$scope.earningsMealCount = 0;
			$scope.earningsAvgTipPerMeal = 0;
		};
	});