// import React from 'react'

// const Payment = () => {
//   return (
//     <div>
//         	<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
// 		<div class="lg:col-span-2">
// 			<h2 class="text-sm font-medium">Payment Method</h2>
// 			<div class="bg-white rounded mt-4 shadow-lg">
// 				<div class="flex items-center px-8 py-5">
// 						<input class="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100" type="radio"/>
// 						<label class="text-sm font-medium ml-4">PayPal</label>
// 					</div>
// 				<div class="border-t">
// 					<div class="flex items-center px-8 py-5">
// 						<input class="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600" type="radio"/>
// 						<label class="text-sm font-medium ml-4">Credit Card</label>
// 					</div>
// 					<div class="grid grid-cols-2 gap-4 px-8 pb-8">
// 						<div class="col-span-2">
// 							<label class="text-xs font-semibold" for="cardNumber">Card number</label>
// 							<input class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="0000 0000 0000 0000"/>	
// 						</div>
// 						<div class="">
// 							<label class="text-xs font-semibold" for="cardNumber">Expiry Date</label>
// 							<input class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="MM/YY"/>	
// 						</div>
// 						<div class="">
// 							<label class="text-xs font-semibold" for="cardNumber">CVC/CVV</label>
// 							<input class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..."/>	
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div>
// 			<h2 class="text-sm font-medium">Purchase Summary</h2>
// 			<div class="bg-white rounded mt-4 shadow-lg py-6">
// 				<div class="px-8">
// 					<div class="flex items-end">
// 						<select class="text-sm font-medium focus:outline-none -ml-1" name="" id="">
// 							<option value="">Product (Billed Monthly)</option>
// 							<option value="">Product (Billed Annually)</option>
// 						</select>
// 						<span class="text-sm ml-auto font-semibold">$20</span>
// 						<span class="text-xs text-gray-500 mb-px">/mo</span>
// 					</div>
// 					<span class="text-xs text-gray-500 mt-2">Save 20% with annual billing</span>
// 				</div>
// 				<div class="px-8 mt-4">
// 					<div class="flex items-end justify-between">
// 						<span class="text-sm font-semibold">Tax</span>
// 						<span class="text-sm text-gray-500 mb-px">10%</span>
// 					</div>
// 				</div>
// 				<div class="px-8 mt-4 border-t pt-4">
// 					<div class="flex items-end justify-between">
// 						<span class="font-semibold">Today you pay (AUD)</span>
// 						<span class="font-semibold">$0</span>
// 					</div>
// 					<span class="text-xs text-gray-500 mt-2">After 1 month free: $22/mo.</span>
// 				</div>
// 				<div class="flex items-center px-8 mt-8">
// 					<input id="termsConditions" type="checkbox"/>
// 					<label class="text-xs text-gray-500 ml-2" for="termsConditions">I agree to the terms and conditions.</label>
// 				</div>
// 				<div class="flex flex-col px-8 pt-4">
// 					<button class="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">Start Subscription</button>
// 					<button class="text-xs text-blue-500 mt-3 underline">Have a coupon code?</button>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
//     </div>
//   )
// }

// export default Payment





// import {
//     Button,
//     Modal,
//     ModalBody,
//     ModalCloseButton,
//     ModalContent,
//     ModalFooter,
//     ModalHeader,
//     useDisclosure,
//   } from "@chakra-ui/react";
//   import { Box, Heading, Spacer, Text} from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import "./Payment.css";
  const initDetails = {
    creditCardNum: "",
    cardHolder: "",
    expireMonth: "January",
    expireYear: "2024",
  };
  const Payment = () => {
    // const totalAmount = useSelector((store) => store.cart.totalPrice);
    const [details, setDetails] = useState(initDetails);
    const navigate = useNavigate();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const handleChange = (e) => {
      setDetails({ ...details, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // onOpen();
    };
    return (
      <div  style={{marginTop:"8%"}}>
        {/* <Heading>Enter you Credit Card details</Heading> */}
        {/* <Text fontSize={20} fontWeight={'bold'} color='green'>Total Amount will be deduct ₹ {totalAmount}</Text> */}
        <div>
          {/* <Spacer h="100" /> */}
          <div
            style={{
              width: "30%",
              margin: "auto",
            }}
          >
            <form id="form" onSubmit={handleSubmit}>
              <div id="card">
                {/* <div className="header">
                  <div className="sticker"></div>
               
             <div>
                    <img
                      className="logo"
                      src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
                      alt="Card logo"
                    />
                  </div> 



                </div> */}
                <div className="body">
                  <h2 style={{ marginTop: "80px" }} id="creditCardNumber">
                    {details.creditCardNum}
                  </h2>
                </div>
                <div className="footer">
                  <div>
                    <h5>Card Holder</h5>
                    <h3>{details.cardHolder}</h3>
                  </div>
                  <div>
                    <h5>Expires</h5>
                    <h3>
                      {details.expireMonth} / {details.expireYear}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="input-container mt">
                <h4>Enter card number</h4>
                <input
                  type="text"
                  maxlength="16" minLength='16'
                  name="creditCardNum"
                  value={details.creditCardNum}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container">
                <h4>Card Holder Name</h4>
                <input
                  type="text"
                  name="cardHolder"
                  value={details.cardHolder}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  justifyContent: "center",
                  gap: "3rem",
                }}
              >
                <div>
                  <h4>Expiration Month</h4>
                  <select
                    value={details.expireMonth}
                    name="expireMonth"
                    onChange={handleChange}
                    required={true}
                  >
                    <option name="January" value="January">
                      January
                    </option>
                    <option name="February" value="February">
                      February
                    </option>
                    <option name="March" value="March">
                      March
                    </option>
                    <option name="April" value="April">
                      April
                    </option>
                    <option name="May" value="May">
                      May
                    </option>
                    <option name="June" value="June">
                      June
                    </option>
                    <option name="July" value="July">
                      July
                    </option>
                    <option name="August" value="August">
                      August
                    </option>
                    <option name="September" value="September">
                      September
                    </option>
                    <option name="October" value="October">
                      October
                    </option>
                    <option name="November" value="November">
                      November
                    </option>
                    <option name="December" value="December">
                      December
                    </option>
                  </select>
                </div>
                <div>
                  <h4>Year</h4>
                  <select
                    value={details.expireYear}
                    name="expireYear"
                    onChange={handleChange}
                    required={true}
                  >
                    <option name="2024" value="2024">
                      2024
                    </option>
                    <option name="2025" value="2025">
                      2025
                    </option>
                    <option name="2026" value="2026">
                      2026
                    </option>
                    <option name="2027" value="2027">
                      2027
                    </option>
                    <option name="2028" value="2028">
                      2028
                    </option>
                    <option name="2029" value="2029">
                      2029
                    </option>
                    <option name="2030" value="2030">
                      2030
                    </option>
                    <option name="2031" value="2031">
                      2031
                    </option>
                    <option name="2032" value="2032">
                      2032
                    </option>
                  </select>
                </div>
                <div>
                  <h4>CVV</h4>

                  <input style={{padding:" 0.25rem 0.25rem"}} type="password" placeholder="CVV" required />
                </div>
              </div>
              <button>Submit Payment</button>
            </form>
          </div>
          {/* <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent style={{background:"#013341"}}>
              <ModalHeader style={{ textAlign: "center", fontSize: "2rem",color:"white" }}>
                Payment Successful
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody style={{ width: "80%", margin: "auto", height: "1rem" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://cdn.dribbble.com/users/4358240/screenshots/14825308/preview.gif"
                  alt="GIF"
                />
              </ModalBody>
              <ModalFooter style={{display:"flex",justifyContent:"center"}}>
                <Button onClick={()=>navigate("/order")} variant="solid">See Orders</Button>
              </ModalFooter>
            </ModalContent>
          </Modal> */}
        </div>
      </div>
    );
  };
  export default Payment;