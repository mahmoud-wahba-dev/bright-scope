// store/bookingStore.js
import { create } from "zustand";

export const useBookingStore = create((set) => ({
  bookingData: null,
  userInfo: null,
  isBookingModalOpen: false,

  setBookingData: (data) => set({ bookingData: data }),
  setUserInfo: (data) => set({ userInfo: data }),
  openBookingModal: () => set({ isBookingModalOpen: true }),
  closeBookingModal: () => set({ isBookingModalOpen: false }),
  clearBooking: () => set({ bookingData: null, userInfo: null }),
}));
