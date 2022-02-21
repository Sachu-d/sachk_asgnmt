import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select } from "@chakra-ui/react"
import React from "react";

const Language: React.FC = () => {

    return <div className="ext">{
        <><Popover flip>
            <PopoverTrigger>
                <Button w='1' h='7' bg='none' color={'burlywood'}><span className="material-icons">
                    language
                </span></Button>
            </PopoverTrigger>
            <PopoverContent textColor={'Green'} borderColor='ButtonShadow' bgColor={'cyan.200'}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Choose A Language</PopoverHeader>
                <PopoverBody>
                    <Select variant='filled' placeholder='Select' colorScheme={'green'}>
                        <option value='hindi'>Hindi</option>
                        <option value='english'>English</option>
                        <option value='spanish'>Spanish</option>
                    </Select>
                </PopoverBody>
            </PopoverContent>
        </Popover>
            <div className="nm">
                <div className="nightmode">
                    <svg id="darkmode" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8863 9.84174C13.38 9.96769 12.8737 10.0307 12.3673 10.0307C9.20267 10.0307 6.67096 7.51151 6.67096 4.36257C6.67096 3.85873 6.73425 3.3549 6.86084 2.85107C6.92413 2.66213 6.86084 2.41022 6.67096 2.22128C6.48108 2.03235 6.2912 1.96937 6.03803 2.03235C3.06327 2.91405 0.974609 5.68512 0.974609 8.77109C0.974609 12.6128 4.07596 15.6988 7.93682 15.6988C11.0382 15.6988 13.823 13.6205 14.6459 10.5975C14.7091 10.4085 14.6459 10.1566 14.456 9.96769C14.3294 9.84174 14.0762 9.77876 13.8863 9.84174Z" fill="#808191" />
                        <path d="M9.20275 3.10363H9.83568V3.73342C9.83568 4.11129 10.0889 4.36321 10.4686 4.36321C10.8484 4.36321 11.1015 4.11129 11.1015 3.73342V3.10363H11.7345C12.1142 3.10363 12.3674 2.85171 12.3674 2.47384C12.3674 2.09597 12.1142 1.84405 11.7345 1.84405H11.1015V1.21426C11.1015 0.836388 10.8484 0.584473 10.4686 0.584473C10.0889 0.584473 9.83568 0.836388 9.83568 1.21426V1.84405H9.20275C8.823 1.84405 8.56982 2.09597 8.56982 2.47384C8.56982 2.85171 8.823 3.10363 9.20275 3.10363Z" fill="#808191" />
                        <path d="M15.5328 5.62213H14.8999V4.99234C14.8999 4.61446 14.6467 4.36255 14.2669 4.36255C13.8872 4.36255 13.634 4.61446 13.634 4.99234V5.62213H13.0011C12.6213 5.62213 12.3682 5.87404 12.3682 6.25192C12.3682 6.62979 12.6213 6.88171 13.0011 6.88171H13.634V7.5115C13.634 7.88937 13.8872 8.14129 14.2669 8.14129C14.6467 8.14129 14.8999 7.88937 14.8999 7.5115V6.88171H15.5328C15.9126 6.88171 16.1657 6.62979 16.1657 6.25192C16.1657 5.87404 15.9126 5.62213 15.5328 5.62213Z" fill="#808191" />
                    </svg>
                    <button className="btn"></button>
                </div>
            </div>
        </>
    }</div>
}

export default Language;