const card =
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "TextBlock",
      "size": "Medium",
      "weight": "Bolder",
      "text": "${title}",
      "style": "heading",
      "wrap": true
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "items": [
            {
              "type": "Image",
              "url": "${imageurl}",
              "altText": "${creator.name}",
              "size": "Medium"
            }
          ],
          "width": "auto"
        },
        {
          "type": "Column",
          "items": [
            {
              "type": "TextBlock",
              "weight": "Bolder",
              "text": "Role: ${role}",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "spacing": "None",
              "weight": "Bolder",
              "text": "Client : ${client}",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "spacing": "None",
              "text": "${period}",
              "isSubtle": true,
              "wrap": true
            },
            {
              "type": "TextBlock",
              "spacing": "None",
              "text": "Team Size: ${teamSize}",
              "isSubtle": true,
              "wrap": true
            }
          ],
          "width": "stretch"
        }
      ]
    },
    {
      "type": "TextBlock",
      "spacing": "1",
      "separator": true,
      "weight": "Bolder",
      "text": "Skills: ${technologies}",
      "isVisible": true,
      "wrap": true
    },
    {
      "type": "FactSet",
      "separator": true,
      "isVisible": false,
      "facts": [
        {
          "value": "Stack: ${technologies}"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "${description}",
      "wrap": true,
      "isVisible": false,
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5"
};

export default card;