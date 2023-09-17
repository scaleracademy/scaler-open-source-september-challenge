## Welcome to Challenge 15

Congratulations on successfully completing the 14th challenge! This marks the completion of the second milestone of the challenge.

Before you proceed with the 15th challenge, ensure you are required to have completed the following tasks to successfully mark the completion of the 2nd milestone: 

## Preqrequisites to mark completion of 2nd Checkpoint (Milestone):

1. Use the creative shared for the successful completion of the second milestone: [Second Milestone Creative](https://github-production-user-asset-6210df.s3.amazonaws.com/129844674/268165917-34df9c63-be61-4ffc-af43-264703f89f0a.jpg) to share on any social platform: LinkedIn, Twitter, Facebook, Instagram, etc. marking the completion of the second milestone.

2. Fill the Google form the following Google form: [Google Form](https://forms.gle/JnzBURSEjRejEgw4A) to mark the completion of the second milestone. Note: This is a mandatory task to be eligible for the prize at the end of the challenge as it allows us to evaluate the submissions in the challenge so far.


Once you have completed the above, you can proceed with the 15th challenge.


## Task: 
Welcome to the 15th challenge! 

Read this [article on merge conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) as it is very important. 

Today is the first part of a two-part challenge related to resolving merge conflicts. To get started, follow these steps:

Task:
Create a Scenario for Merge Conflict:

- Create a new project on your local system (e.g., a code project or a text file).

- Intentionally make changes to the same lines of code or content in different branches of your project to create a scenario where a merge conflict would occur during a merge or pull request.
Resolve the Merge Conflict:

- Follow the steps outlined in this [article](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) to understand how to resolve merge conflicts.

- Use the techniques mentioned in the article to resolve the conflict you intentionally created in your project.

- Share Screenshot: Take a screenshot of your terminal or Git client when you are resolving the merge conflict. 

- Share this screenshot in the issue you created during the first challenge (Challenge 1) to demonstrate that you have successfully resolved a merge conflict.




### Sample Example for merge conflict
Here is an example of a merge conflict:


Step 1: Set Up Your Repository
a. Create a new directory on your computer for your Git project:

```
mkdir merge-conflict-example
cd merge-conflict-example
```

b. Initialize the directory as a Git repository:

```
git init
```

Step 2: Create Two Branches
a. Create a new branch called feature-branch:
    
    ``` 
    git checkout -b feature-branch

    ```
b. Create a file and make some changes in it. For example, create a file named example.txt and add the following content:

```
This is some content on the feature branch.
```

c. Stage and commit your changes:

```
git add example.txt
git commit -m "Add feature branch content"

```
d. Switch back to the main (or master) branch:

```
git checkout main
```
e. Make changes to the same file, example.txt, in the main branch. For example:

```
This is some content on the main branch.
```

f. Stage and commit your changes on the main branch:
```
git add example.txt
git commit -m "Add main branch content"
```

Step 3: Create a Merge Conflict
a. Attempt to merge the feature-branch into main:

```
git merge feature-branch
```

At this point, you'll encounter a merge conflict because both branches have made changes to the same part of the example.txt file.


Step 4: Resolve the Merge Conflict
a. Open the example.txt file in your code editor.

b. You'll see Git's conflict markers, which look like this:

```
<<<<<<< HEAD
This is some content on the main branch.
=======
This is some content on the feature branch.
>>>>>>> feature-branch
```

c. Manually edit the file to decide which changes to keep. Remove the conflict markers and choose the content you want to keep. For example:

```
This is some content on the main branch.

This is some additional content on the feature branch.
```

d. Save the file.


Step 5: Commit the Resolved Merge Conflict
a. Stage the resolved file:

```
git add example.txt
```

b. Commit the changes:

```
git commit -m "Resolve merge conflict"
```

Now, you've successfully created a scenario for a merge conflict, resolved it, and committed the changes. You can use these steps as a practical exercise to understand how merge conflicts work in Git.






