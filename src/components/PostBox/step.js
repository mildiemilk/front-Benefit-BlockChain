import React, { Component } from 'react'
import { Step } from 'semantic-ui-react'

const steps = [
  { completed: true, title: 'ระบุความต้องการเบื้องต้น' },
  { active: true, title: 'เลือกโบรกเกอร์' },
  { active: true, title: 'จัดแผนประกัน' },
  { active: true, title: 'เลือกบริษัทประกัน' },
  { active: true, title: 'อัพโหลดไฟล์' },
  { active: true, title: 'รายการเสนอราคา' },
]

export default class Steps extends Component {
  render() {
    return (
      <div>
        <Step.Group size="mini" ordered items={steps} />
      </div>
    )
  }
}
