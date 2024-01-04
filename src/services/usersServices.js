import httpRequest from "@/utils/httpRequest";

export const getSuggestedAccounts = async (page, perPage) => {
    try {
        const res = await httpRequest.get("users/suggested", {
            params: { page, per_page: perPage },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFollowingAccounts = async (page) => {
    try {
        const res = await httpRequest.get("me/followings", {
            params: { page },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
