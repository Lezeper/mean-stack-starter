(function(){
	app.controller('homeCtrl', ['$scope', function($scope){
	// type: Credit, Debit
	// comsumer: date, type, amount, account, notes
	// account: id, name, dueDate, closingDate, CL, balance, lastBalance, allow%
		$scope.accounts = [
			{
				"id": 000,
				"name": "Citi Check",
				"dueDate": 0,
				"closingDate": 0,
				"CL": 0,
				"balance": 295,
				"lastBalance": 0,
				"allowRatio": 0
			},
			{
				"id": 001,
				"name": "DC",
				"dueDate": 14,
				"closingDate": 16,
				"CL": 3500,
				"balance": 202,
				"lastBalance": 100,
				"allowRatio": 3
			},
			{
				"id": 002,
				"name": "Freedom",
				"dueDate": 10,
				"closingDate": 13,
				"CL": 7000,
				"balance": 467,
				"lastBalance": 0,
				"allowRatio": 4
			},
			{
				"id": 003,
				"name": "Amazon",
				"dueDate": 27,
				"closingDate": 3,
				"CL": 6000,
				"balance": 168,
				"lastBalance": 260,
				"allowRatio": 5
			}
		];

		$scope.activities = [
			{
				"date": "2/24/2017",
				"type": "Credit",
				"amount": 1735.33,
				"account": "Citi Check",
				"notes": "Salary Direct Deposit"
			},
			{
				"date": "2/27/2017",
				"type": "Debit",
				"amount": 15,
				"account": "DC",
				"notes": "Dreamhost Fee"
			},
			{
				"date": "2/28/2017",
				"type": "Debit",
				"amount": 500,
				"account": "DC",
				"notes": "Honda Financial Serivce"
			},
			{
				"date": "3/1/2017",
				"type": "Debit",
				"amount": 1350,
				"account": "Citi Check",
				"notes": "Hosing Rent"
			},
			{
				"date": "3/14/2017",
				"type": "Credit",
				"amount": 202,
				"account": "Citi Check",
				"notes": "CC Payment"
			}
		];
	}]);
})();