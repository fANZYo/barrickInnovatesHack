pragma solidity ^0.4.18;

//Funding Smart contract - ASM (Artisanal or Small Miners) are "vetted" by a series of questions and ratings provided

contract Funding {

    //address asmADD = 0xa306084a0ed9cdfa1d54f9db0009bda0f35abdff; //unique address provided 
    address barricksFund; // address for barrick
    bool state; //state after vetting on ASM : True or False (active or inactive)
    int rating; //rating provided after vetting on ASM : between 1-3 (3 being worst)
    uint funding; //amount loaned to contract then to small miner
    Land checkLand;
    
    //constructor
    function Funding() public payable{
        barricksFund = msg.sender;
        funding = msg.value;
    }


    //be able to receive ether payment for this contract through payable.
    function SendFunds() public payable {
        barricksFund = msg.sender;
        barricksFund.transfer(msg.value);
    }
    


    function Vetting(bool newState,int ratings) public {
        //add rating+status to blockchain
        if(newState){
            rating = ratings;
            state = newState;
            Land.transfer(fundings);
        }
    }
}


//Land Smart contract - ASM (Artisanal or Small Miners) need to provide deed to land to receive funds

contract Land {
    address asm; //ASM address 
    address barrick; //barrick address
    bool deedOfLandGiven; //Has deeds of land been given by ASM : True or False 
    bool barrickOwnDeedOfLand = false; //Has Barrick changed ownership on land
    uint funding; //amount loaned to contract then to small miner

    function Land () public payable {
        funding = msg.value;
    }

    //be able to .
    function SendLoanToASM (uint loan, address asmADDR) public {
        //funding sent
        asm = asmADDR;
        funding = loan; 
        asm.transfer(loan);
    }

    function sendLoanBack (uint loan) public {
        //money sent back to Barrick
        barrick = msg.sender;
        funding = loan;
        barrick.transfer(loan);
    }
    

    function LandDeedGiven (bool state) public payable{
        //add rating to blockchain
        if(state){
            deedOfLandGiven = state;
            SendLoanToASM(msg.value,asm);
            barrickOwnDeedOfLand = true;
        }else{
            deedOfLandGiven = state;
            sendLoanBack(msg.value);
        }
        
    }
}
