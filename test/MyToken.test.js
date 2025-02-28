const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
    it("Should deploy and mint tokens", async function () {
        const [owner] = await ethers.getSigners();
        const MyToken = await ethers.getContractFactory("MyToken");
        const myToken = await MyToken.deploy(1000);
        await myToken.waitForDeployment();

        expect(await myToken.balanceOf(owner.address)).to.equal(
            ethers.parseUnits("1000", 18)
        );
    });
});
