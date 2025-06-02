import { IRecruiting } from "@/types/job";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecruitingSliceState {
    selectedRecruiting: IRecruiting | null
}

const initialState: RecruitingSliceState = {
    selectedRecruiting: null
}

export const recruitingSlice = createSlice({
    name: 'recruiting',
    initialState,
    reducers: {
        updateRecruiting: (state, action: PayloadAction<IRecruiting | null>) => {
            state.selectedRecruiting = action.payload;
        }
    }
})

export const { updateRecruiting } = recruitingSlice.actions;

export default recruitingSlice.reducer;