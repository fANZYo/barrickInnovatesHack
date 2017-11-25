pragma solidity ^0.4.18;

//Funding Smart contract - ASM (Artisanal or Small Miners) are "vetted" by a series of questions and ratings provided

contract Funding {

    address asmADD = 0xa306084a0ed9cdfa1d54f9db0009bda0f35abdff; //unique address provided 
    address barrickADD = 0xfd7597af18fb14fe283bee7279ca3dda4115df28; // address for barrick
    bool state; //state after vetting on ASM : True or False (active or inactive)
    int rating; //rating provided after vetting on ASM : between 1-3 (3 being worst)
    uint funding; //amount loaned to contract then to small miner
    address barricksFund;

    //constructor
    function Funding(){
    }


    //be able to receive ether payment for this contract through payable.
    function sendFunds (uint fund) payable {
        barricksFund = msg.sender;
        funding = fund;
    }
    


    function Vetting(bool newState,int ratings) {
        //add rating+status to blockchain
        if(newState){
            SendFunds(msg.value);
            rating = ratings;
            state = newState;
            Land checkLand = Land(msg.value);
        }
    }
}


//Land Smart contract - ASM (Artisanal or Small Miners) need to provide deed to land to receive funds

contract Land {
    address asm; //ASM address 
    address barrick = 0xfd7597af18fb14fe283bee7279ca3dda4115df28; //barrick address
    bool deedOfLandGiven; //Has deeds of land been given by ASM : True or False 
    bool barrickOwnDeedOfLand = false; //Has Barrick changed ownership on land
    uint funding; //amount loaned to contract then to small miner

    function Land (uint fundVetting) payable {
        funding = fundVetting;
    }

    //be able to receive ether payment for this contract through payable.
    function SendLoanToASM (uint loan, address asmADDR) {
        //funding sent
        asm = asmADDR;
        funding = loan; 
    }

    function sendLoanBack (uint loan, address barrADDR){
        //money sent back to Barrick
        barrick = barrADDR;
        funding = loan;
    }
    

    function LandDeedGiven (bool state) {
        //add rating to blockchain
        if(state){
            deedOfLandGiven = state;
            SendLoanToASM(funding,0xa306084a0ed9cdfa1d54f9db0009bda0f35abdff);
            barrickOwnDeedOfLand = true;
        }else{
            deedOfLandGiven = state;
            sendLoanBack(funding,barrick);
        }
        
    }
}
