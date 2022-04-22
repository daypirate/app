import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Icon } from "@iconify/react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import authImage from "../public/assets/auth/auth-background.svg";
import discordImage from "../public/assets/discord.svg";
import rightArrow from "../public/assets/auth/right-arrow.svg";
import { useAuth } from "../hooks/useAuth";

export default function ForgetPassword() {
    return (
        <div className="dark:bg-[#202020] dark:text-white relative">
            <div className="flex items-center justify-between px-6 xs:pl-8 xs:pr-12">
                <Logo className="w-[80px] xs:w-[120px] pt-5" />
                <div className="pt-1.5">
                    <DarkModeToggle
                        className="w-[26px] h-[24px] xs:w-[34px] xs:h-[31px]"
                        darkClassName="w-[19px] h-[27px] xs:w-[25px] xs:h-[35px]"
                    />
                </div>
            </div>

            <div className="flex mmd:bg-mobile-login justify-center">
                <div className="md:block md:w-1/2 md:-m-[1px] md:p-0 xs:pt-9 md:mx-auto lg:pl-4 xl:pl-20 2xl:pl-0 2xl:mx-0">
                    <Image src={authImage} layout="responsive" alt="Dash" />
                </div>
                <div className="w-full mmd:mb-[10.8rem] px-6 pb-8 mxs:mt-12 sm:w-4/5 lg:w-3/6 2xl:w-1/4 sm:mx-12 lg:mx-20 xl:ml-44 xl:mr-40 2xl:mx-auto 2xl:mt-20">
                    <h1 className="text-36px mb-14 text-center font-black xs:text-30px xs:mb-10">
                        FORGOT PASSWORD?
                    </h1>
                    <form
                        className="rounded-3xl mxs:pb-5 mxs:mx-2 lg:pt-12 lg:pb-6 lg:px-12"
                        onSubmit="">
                        <div>
                            <div>
                                <label
                                    className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                                    htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="form-input text-12px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
                                    name="email"
                                    id="email"
                                    type="email"
                                    maxLength="80"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label
                                        className="font-semibold xs:text-12px md:text-18px xs:font-bold xs:mb-1"
                                        htmlFor="dob">
                                        Date of Birth
                                    </label>
                                </div>
                                <input
                                    className="form-input text-12px rounded-lg dark:bg-[#E9E9E9] xs:py-1 md:text-16px"
                                    name="dob"
                                    id="dob"
                                    type="date"
                                    minLength="6"
                                    maxLength="100"
                                    placeholder="DD/MM/YYYY"
                                    required
                                />
                            </div>
                            <button
                                className="w-1/2 py-0 button-small button-deep-sky-blue mx-auto text-15px md:text-16px rounded mt-6 h-8 xs:mt-8 xs:h-8 xs:py-1"
                                type="submit">
                                Reset password
                            </button>
                            <div className="flex justify-between -mx-10 my-6 lg:-mx-12 xs:my-8">
                                <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
                                <div className="text-[#595959] dark:text-[#FFFFFF] text-15px md:text-18px mxs:pt-1">
                                    Remember password
                                </div>
                                <div className="w-1/4 h-4 border-[#A0A0A0] border-b-4"></div>
                            </div>
                            <Link href="login">
                                <a
                                    className="button-small button-deep-sky-blue rounded-md mx-auto text-14px pr-0.5 lg:text-15px xs:pl-8 lg:pr-auto">
                                    Sign back in &nbsp;&nbsp;
                                    <Image
                                        src={rightArrow}
                                        height={24}
                                        alt="Join The Dynamics Discord"
                                        />
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="bg-deep-sky-blue text-white py-1.5 xs:py-3">
                <div className="flex items-center justify-center mxs:text-16px xs:lead">
                    Don&#x27;t have an account?&nbsp;
                    <Link href="/signup">
                        <a className="underline text-white">Become a member!</a>
                    </Link>
                </div>
            </footer>
        </div>
    );
}