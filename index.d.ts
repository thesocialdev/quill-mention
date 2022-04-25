export class Mention {
  constructor(quill, options);
  selectHandler(): boolean;
  escapeHandler(): boolean;
  upHandler(): boolean;
  downHandler(): boolean;
  showMentionList(): void;
  hideMentionList(): void;
  highlightItem(): void;
  getItemData(): any;
  onContainerMouseMove(): void;
  selectItem(): void;
  insertItem(): void;
  onItemMouseEnter(e): void;
  onDisabledItemMouseEnter(e): void;
  onItemClick(e): void;
  onItemMouseDown(e): void;
  renderLoading(): void;
  removeLoading(): void;
  renderList(mentionChar, data, searchTerm): any;
  nextItem(): void;
  prevItem(): void;
}
export class MentionBlot {
  constructor(scroll, node);
}

export as namespace QuillMention;
