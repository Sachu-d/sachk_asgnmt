import { Box, Flex, Grid, GridItem, IconButton, Spacer, Tag, Text, Wrap, WrapItem } from "@chakra-ui/react";
import AssetTab from "./AssetTab";
import ReferralCard from "./ReferralCard";
import RewardSection from "./RewardSection";
import Tutorial from "./Tutorial";

const InfoPage: React.FC = () => {
    return (
        <div className="container">
            {/* <div className="sectionLine">
                <h1>Section</h1>
                <div className="line"></div>
            </div>
            <div className="wallet">
                <IconButton id="pocket" variant={'unstyled'} size='xs' aria-label='Search database' icon={<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3966 10.3811H16.3446C14.8568 10.3804 13.6509 9.41664 13.6499 8.2267C13.6499 7.03676 14.8568 6.073 16.3446 6.07227H20.3966" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.8029 8.17741H16.491" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4926 1.25851H15.144C18.0448 1.25851 20.3965 3.13936 20.3965 5.45941V11.2048C20.3965 13.5249 18.0448 15.4057 15.144 15.4057H6.4926C3.59178 15.4057 1.24011 13.5249 1.24011 11.2048V5.45941C1.24011 3.13936 3.59178 1.25851 6.4926 1.25851Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                } />
                <Text id="txt">0.2 $Xyz</Text>
                <Tag id="tier">Tier 1</Tag>
            </div>
            <Tutorial />
            <RewardSection />
            <Box className="firstcard">{<ReferralCard />}</Box>
            <Box className="secondcard">{<ReferralCard />}</Box> */}
        <AssetTab />
        </div>
    );
}

export default InfoPage;