/* eslint-disable camelcase */
import fetch from 'node-fetch'

export type GitHubRepository = {
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  private: boolean,
  html_url: string,
  description: string,
  fork: boolean,
  created_at: string,
  updated_at: string,
  pushed_at: string,
  git_url: string,
  ssh_url: string,
  clone_url: string,
  svn_url: string,
  homepage: string,
  size: number,
  stargazers_count: number,
  watchers_count: number,
  language: string,
  forks_count: number,
  archived: boolean,
  disabled: boolean,
  open_issues_count: number,
  forks: number,
  open_issues: number,
  watchers: number,
  default_branch: string
}

const getRepos = async () => {
  const url = 'https://api.github.com/users/InkoHX/repos?sort=pushed'
  const data: GitHubRepository[] = await fetch(url)
    .then(res => res.json())
    .catch(console.error)

  return data
}

export default getRepos
