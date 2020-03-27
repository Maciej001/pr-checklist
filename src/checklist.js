const checklist = [
  {
    id: 1,
    label: "I squashed my local commits into one, eg. squash 3 commits",
    code: "git rebase -i HEAD~3"
  },
  {
    id: 2,
    label: "I rebased my branch against the branch I want to merge into",
    code: "git pull --rebase origin branch-name-to-rebase-against"
  },
  {
    id: 3,
    label: "I force-pushed my branch to origin (GitHub)",
    code: "git push -f"
  },
  {
    id: 4,
    label: "I created a PR and I checked there are no merge conflicts"
  },
  {
    id: 5,
    label: "I added the Trello ticket number to the PR message"
  },
  {
    id: 6,
    label: "I have written a description of what my commit changes/fixes"
  },
  {
    id: 7,
    label:
      "I have double-checked my PR by reading my code changes on GitHub and made sure the code is clean without console.logs and commented out code."
  },
  {
    id: 8,
    label: "I added the code owner and one more developer to review my code"
  },
  {
    id: 9,
    label: "I added my commit to the repsective release log in Nuclino"
  },
  {
    id: 10,
    label:
      "I posted my PR link to the fe-platform-devs Slack channel listing code reviewers names, eg. @Madara, @David Tse"
  },
  {
    id: 11,
    label: "I resolved all the comments and applied requested changes"
  },
  {
    id: 12,
    label: "I squashed my commits again and force pushed to github"
  },
  {
    id: 13,
    label: "I merged the PR"
  },
  {
    id: 14,
    label: "I deleted the branch on GitHub"
  },
  {
    id: 15,
    label: "I deleted my local branch"
  },
  {
    id: 16,
    label: "I marked my branch as 'merged' in the release log in Nuclino"
  }
];

export default checklist;
