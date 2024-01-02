import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import { authService } from './userService';

export const registerUser = createAsyncThunk('auth/register', async (userData , thukAPI) => {
    try{
        return await authService.register(userData)
    }
    catch(error){
            return thukAPI.rejectWithValue(error)
    }
})


const initialState = {
    user:"",
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {},
    extraReducers : (builder)=>{
        builder.addCase(registerUser.pending,(state)=> {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isError = false;
            state.isSuccess = true;
            state.isLoading = false;
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            state.isLoading = false;
        })
    }
})

export const authReducer = authSlice.reducer;

