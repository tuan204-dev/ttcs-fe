import BookmarkService from "@/services/bookMarkServices"
import useSWR from "swr"

export const useBookmarks = () => {
    const { data, error, isLoading, isValidating, mutate } = useSWR('/bookmark', BookmarkService.getBookmarks)

    return {
        bookmarks: data ?? [],
        error,
        isLoading,
        isValidating,
        mutate
    }
}