var Web3 = require("web3")
const web3 = new Web3("wss://ropsten.infura.io/ws/v3/bf14574e94ab4f2d8e4b0002ded310f5")

const CONTRACT_ADDRESS = "0x2a37F0fE87681282E4305AAd4663245F8be77dae"
const ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "entrant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "randomPotting",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "randomPositioning",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "randomComposure",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "randomStylepoints",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "randomRungood",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"name": "AttributesDefined",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "entrant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "entrantCount",
				"type": "uint256"
			}
		],
		"name": "EntrantRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "p1",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "p2",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "p1Score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "p2Score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "winner",
				"type": "string"
			}
		],
		"name": "RoundOver",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			}
		],
		"name": "TournamentFinished",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "clearTournamentEntrants",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "register",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "runTournament",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "setRandNonce",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRandNonce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_randNonce",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registered",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tournamentEntrants",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tournamentPlayers",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_potting",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_positioning",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_composure",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_stylepoints",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rungood",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_score",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)

let options = {
    fromBlock: 11000089,
    toBlock: 'latest'
}

myContract.getPastEvents("allEvents", options, function(error, events){ console.log(events); })
.then(function(events){
    console.log(events)
})

options = {}

myContract.events.allEvents(options)
    .on('data', event => console.log(event))
    .on('changed', changed => console.log(changed))
    .on('error', err => console.log(changed))
    .on('connected', str => console.log(str))