---
syntax: {
}
---

.main_page {
  template: mockup/index.html#shafi-index-template;
}

is {
  .biography-block -is> @template | .block_1_content;
}

.biography-block {
  value: .block_1_content;
}

.research-block {
  value: .block_2_content;
}

.publications-block {
  value: .block_3_content;
}

.activities-block {
  value: .block_4_content;
}

.teaching-block {
  value: .block_5_content;
}

.students-block {
  value: .block_6_content;
}
