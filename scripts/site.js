document.addEventListener("DOMContentLoaded", (event) => {
	let form = document.getElementById("form");
	const contentWrap = document.querySelector(".content-wrap:nth-child(2)");
	const txt = document.querySelectorAll(".content-wrap input[type=text]");
	const btnAdd = document.getElementById("addUIBtn");
	const btnRemove = document.getElementById("removeUIBtn");
	const btnContainer = document.querySelector(".btnContainer");
	const summaryContainer = document.querySelector(".priceSummaryContainer");
	const btnCalculate = document.getElementById("calculateUIBtn");
	const btnReset = document.getElementById("resetUIBtn");

	let subTotalPrice = document.getElementById("subTotalPrice");
	const gctPrice = document.getElementById("gctPrice");
	let totalPrice = document.getElementById("totalPrice");

	const priceField = document.querySelector(".userInputPrice");
	const nameField = document.querySelector(".userInputName");
	const error = document.querySelector(".error");
	const error1 = document.querySelector(".error1");
	const error2 = document.querySelector(".error2");

	const fields = contentWrap.cloneNode(true);
	const contentWrapParent = contentWrap.parentNode;

	btnAdd.addEventListener("click", (event) => {
		contentWrapParent.insertBefore(fields.cloneNode(true), btnContainer);
	});

	btnRemove.addEventListener("click", (event) => {
		const contentWrapCount = document.querySelectorAll(".content-wrap").length;

		if (contentWrapCount <= 2) {
			txt[0].value = "";
			txt[1].value = "";
		} else {
			const sibling = btnContainer.previousElementSibling;
			sibling.parentElement.removeChild(sibling);
		}
	});

	btnCalculate.addEventListener("click", (event) => {
		summaryContainer.classList.remove("hide");

		let sub = calculateSubTotal();
		let gct = calculateGCT(sub);
		calculateTotal(sub, gct);
	});

	btnReset.addEventListener("click", (event) => {
		subTotalPrice.innerHTML = "$0";
		gctPrice.innerHTML = "$0";
		totalPrice.innerHTML = "$0";

		let priceInput = document.querySelectorAll(".userInputPrice");
		for (let i = 0; i < priceInput.length; i++) {
			priceInput[i].value = "";
		}

		let nameInput = document.querySelectorAll(".userInputName");
		for (let j = 0; j < nameInput.length; j++) {
			nameInput[j].value = "";
		}

		const contentWrapCount = document.querySelectorAll(".content-wrap").length;
		const contentWrapTemp = document.querySelectorAll(".content-wrap");
		for (let i = 2; i <= contentWrapCount - 1; i++) {
			contentWrapTemp[i].parentElement.removeChild(contentWrapTemp[i]);
		}

		setTimeout(() => {
			summaryContainer.classList.add("hide");
		}, 3000);
	});

	/**
	 * This method calculates the sub total.
	 * @returns the sub total
	 */
	function calculateSubTotal() {
		let priceInput = document.querySelectorAll(".userInputPrice");
		let calculatedSubTotal = 0;

		for (let i = 0; i < priceInput.length; i++) {
			calculatedSubTotal += Number(priceInput[i].value);
		}

		subTotalPrice.innerHTML =
			"$" + Number.parseFloat(calculatedSubTotal).toFixed(2);

		return calculatedSubTotal;
	}

	/**
	 * This method calculates the gct.
	 * @param {*} subTotalVal
	 * @returns the gct
	 */
	function calculateGCT(subTotalVal) {
		let calculatedGCT = 0;

		calculatedGCT = subTotalVal * 0.165;

		gctPrice.innerHTML = "$" + Number.parseFloat(calculatedGCT).toFixed(2);

		return calculatedGCT;
	}

	/**
	 * This method calculates the total.
	 * @param {*} subTotalVal
	 * @param {*} gctVal
	 * @returns the total
	 */
	function calculateTotal(subTotalVal, gctVal) {
		let calculatedTotal = 0;

		calculatedTotal = subTotalVal + gctVal;

		totalPrice.innerHTML = "$" + Number.parseFloat(calculatedTotal).toFixed(2);

		return calculatedTotal;
	}

	priceField.addEventListener("input", (event) =>{
		let val = priceField.value;
		
		if(isNaN(val)){
			error.classList.remove("hide");
		}
	})

	nameField.addEventListener("input", (event) =>{
		let val = nameField.value;
		let regex = /[a-zA-Z]+/gm;
		
		if(!val.match(regex)){
			error1.classList.remove("hide");
		}else{
			error1.classList.add("hide");
		}

		if(val.length < 3){
			error2.classList.remove("hide");
		}else{
			error2.classList.add("hide");
		}
	})
});