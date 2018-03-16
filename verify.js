Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

	numBlocks = web3.eth.blockNumber;

	ads_string = "ADS_TRANSACTION"

	counts = {}

	for(i = 0; i < numBlocks; i++)
	{
	   block = web3.eth.getBlock(i);
	   transactions = block.transactions
	   console.log('block ' + i + ' has ' + transactions.length + ' transactions ')
   
	   for(j = 0; j < transactions.length; j++)
	   {
			trans = web3.eth.getTransactionFromBlock(i, j)
			console.log('block ' + i + ' tx ' + j + ' ' + web3.toAscii(trans.input))		
		
			data = web3.toAscii(trans.input)
		
			isADStx = data.indexOf(ads_string) !== -1;	
		
			if(isADStx)
			{		
				id = trans.to
				if(! id in counts)
					counts[id] += 1
			}
		}
	}		
