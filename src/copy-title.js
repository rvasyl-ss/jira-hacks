import { copy2Clipboard } from './util/clipboard';
import { getIssueTitle } from './util/getIssueTitle';
import { getLabels } from './util/l10n';

const l10n = getLabels(document.documentElement.lang);

main();

function main() {
  var title = getIssueTitle();
  var selectNode = document.createTextNode(`${title.titleString}`);

  setTimeout(() => {
    copy2Clipboard(selectNode);

    // eslint-disable-next-line no-undef
    JIRA.Messages.showSuccessMsg(l10n.copiedIssueTitle2Clipboard());

    document.body.removeChild(selectNode);
  }, 300);
}