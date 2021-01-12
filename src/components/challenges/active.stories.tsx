import React from 'react'
import Active from './active'

export default {
    title: 'Active Challenges',
    component: Active
}

const activeChallenge = {
    "id": 1,
    "title": "Sherlock and Anagrams",
    "level": "Easy",
    "start_date": "10/4/2020",
    "end_date": "10/11/2020",
    "participants": [
      {
        "user_id": "1",
        "first_name": "Sumit",
        "last_name": "Dhanania",
        "yoe": 2,
        "company": "Student at Pesto",
        "designation": "Student",
        "img": "",
        "github_id": "",
        "linkedin_id": "",
        "twitter_id": "",
        "instagram_id": "",
        "is_member": 1,
        "rds_member_id": "sumitdhanania"
      },
      {
        "user_id": "2",
        "first_name": "Nikhil",
        "last_name": "Bhandarkar",
        "yoe": 2,
        "company": "Student at Pesto",
        "designation": "Student",
        "img": "",
        "github_id": "",
        "linkedin_id": "",
        "twitter_id": "",
        "instagram_id": "",
        "is_member": 1,
        "rds_member_id": "nikhil"
      },
      {
        "user_id": "3",
        "first_name": "Ankush",
        "last_name": "Dharkar",
        "yoe": 2,
        "company": "Real Dev Squad",
        "designation": "Founder",
        "img": "",
        "github_id": "",
        "linkedin_id": "",
        "twitter_id": "",
        "instagram_id": "",
        "is_member": 1,
        "rds_member_id": "ankush"
      }
    ],
    "is_active": 1,
    "is_user_subscribed": 0
  }
const Template = (args) => <Active {...args} />;

export const DemoComponent = Template.bind({});
DemoComponent.args = {
  content: activeChallenge
};