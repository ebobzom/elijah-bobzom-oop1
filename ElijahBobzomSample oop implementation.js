var BankAccount={
	constructor: function con(accountname,accountnumber){
		this.accountname=accountname;
		this.accountnumber=accountnumber;
		this.startingBalance=0.0;
	},
	
	deposit:function dep(amount){
		return this.startingBalance+=amount;
	},
	withdraw: function withd(amount){
		if (amount>this.startingBalance){
			return "Insufficient Funds, your balance is less than amount"
		}else{
			return this.startingBalance-=amount;
		}
	},
	totalbalance:function bal(){
		return this.startingBalance;
	}
};
var currentaccount=Object.create(BankAccount);
currentaccount.totalbalance= function startingAccountBalance(){
	return 500;
};