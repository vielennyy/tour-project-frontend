import 'date-fns';
import { TPost, TTag } from '@cromwell/core';
declare const PostSettings: (props: {
    postData?: TPost;
    isSettingsOpen: boolean;
    anchorEl: Element;
    allTags?: TTag[] | null;
    onClose: (newData: Partial<TPost>) => void;
    isSaving?: boolean;
    handleUnpublish: () => void;
    refetchMeta: () => Promise<Record<string, string> | undefined>;
}) => JSX.Element;
export default PostSettings;
//# sourceMappingURL=PostSettings.d.ts.map