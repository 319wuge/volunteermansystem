package com.hfuu.model.po;

import java.util.Date;

public class TbUser {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.id
     * 主键
     *
     * @mbggenerated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.disabled
     * 是否被删除
     *
     * @mbggenerated
     */
    private Integer disabled;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.createUser
     * 创建用户
     *
     * @mbggenerated
     */
    private Integer createuser;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.createTime
     * 创建时间
     *
     * @mbggenerated
     */
    private Date createtime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.updateUser
     * 更新用户
     *
     * @mbggenerated
     */
    private Integer updateuser;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.updateTime
     * 更新时间
     *
     * @mbggenerated
     */
    private Date updatetime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.remark
     * 备注
     *
     * @mbggenerated
     */
    private String remark;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.username
     * 用户名
     *
     * @mbggenerated
     */
    private String username;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.pasword
     * 密码
     *
     * @mbggenerated
     */
    private String pasword;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.realName
     * 真实姓名
     *
     * @mbggenerated
     */
    private String realname;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.mobileNumber
     * 手机号码
     *
     * @mbggenerated
     */
    private String mobilenumber;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.stuNo
     * 学号
     *
     * @mbggenerated
     */
    private String stuno;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.sex
     * 1 男 2 女
     *
     * @mbggenerated
     */
    private Integer sex;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.userRole
     * 1 学生 2 管理员 3学校管理员 4 超级管理员
     *
     * @mbggenerated
     */
    private Integer userrole;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.major
     * 专业
     *
     * @mbggenerated
     */
    private String major;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.grade
     * 年级
     *
     * @mbggenerated
     */
    private String grade;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.school
     * 所在学校
     *
     * @mbggenerated
     */
    private String school;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.id
     *
     * @return the value of tb_user.id
     *
     * @mbggenerated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.id
     *
     * @param id the value for tb_user.id
     *
     * @mbggenerated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.disabled
     *
     * @return the value of tb_user.disabled
     *
     * @mbggenerated
     */
    public Integer getDisabled() {
        return disabled;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.disabled
     *
     * @param disabled the value for tb_user.disabled
     *
     * @mbggenerated
     */
    public void setDisabled(Integer disabled) {
        this.disabled = disabled;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.createUser
     *
     * @return the value of tb_user.createUser
     *
     * @mbggenerated
     */
    public Integer getCreateuser() {
        return createuser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.createUser
     *
     * @param createuser the value for tb_user.createUser
     *
     * @mbggenerated
     */
    public void setCreateuser(Integer createuser) {
        this.createuser = createuser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.createTime
     *
     * @return the value of tb_user.createTime
     *
     * @mbggenerated
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.createTime
     *
     * @param createtime the value for tb_user.createTime
     *
     * @mbggenerated
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.updateUser
     *
     * @return the value of tb_user.updateUser
     *
     * @mbggenerated
     */
    public Integer getUpdateuser() {
        return updateuser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.updateUser
     *
     * @param updateuser the value for tb_user.updateUser
     *
     * @mbggenerated
     */
    public void setUpdateuser(Integer updateuser) {
        this.updateuser = updateuser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.updateTime
     *
     * @return the value of tb_user.updateTime
     *
     * @mbggenerated
     */
    public Date getUpdatetime() {
        return updatetime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.updateTime
     *
     * @param updatetime the value for tb_user.updateTime
     *
     * @mbggenerated
     */
    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.remark
     *
     * @return the value of tb_user.remark
     *
     * @mbggenerated
     */
    public String getRemark() {
        return remark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.remark
     *
     * @param remark the value for tb_user.remark
     *
     * @mbggenerated
     */
    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.username
     *
     * @return the value of tb_user.username
     *
     * @mbggenerated
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.username
     *
     * @param username the value for tb_user.username
     *
     * @mbggenerated
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.pasword
     *
     * @return the value of tb_user.pasword
     *
     * @mbggenerated
     */
    public String getPasword() {
        return pasword;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.pasword
     *
     * @param pasword the value for tb_user.pasword
     *
     * @mbggenerated
     */
    public void setPasword(String pasword) {
        this.pasword = pasword == null ? null : pasword.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.realName
     *
     * @return the value of tb_user.realName
     *
     * @mbggenerated
     */
    public String getRealname() {
        return realname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.realName
     *
     * @param realname the value for tb_user.realName
     *
     * @mbggenerated
     */
    public void setRealname(String realname) {
        this.realname = realname == null ? null : realname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.mobileNumber
     *
     * @return the value of tb_user.mobileNumber
     *
     * @mbggenerated
     */
    public String getMobilenumber() {
        return mobilenumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.mobileNumber
     *
     * @param mobilenumber the value for tb_user.mobileNumber
     *
     * @mbggenerated
     */
    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber == null ? null : mobilenumber.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.stuNo
     *
     * @return the value of tb_user.stuNo
     *
     * @mbggenerated
     */
    public String getStuno() {
        return stuno;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.stuNo
     *
     * @param stuno the value for tb_user.stuNo
     *
     * @mbggenerated
     */
    public void setStuno(String stuno) {
        this.stuno = stuno == null ? null : stuno.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.sex
     *
     * @return the value of tb_user.sex
     *
     * @mbggenerated
     */
    public Integer getSex() {
        return sex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.sex
     *
     * @param sex the value for tb_user.sex
     *
     * @mbggenerated
     */
    public void setSex(Integer sex) {
        this.sex = sex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.userRole
     *
     * @return the value of tb_user.userRole
     *
     * @mbggenerated
     */
    public Integer getUserrole() {
        return userrole;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.userRole
     *
     * @param userrole the value for tb_user.userRole
     *
     * @mbggenerated
     */
    public void setUserrole(Integer userrole) {
        this.userrole = userrole;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.major
     *
     * @return the value of tb_user.major
     *
     * @mbggenerated
     */
    public String getMajor() {
        return major;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.major
     *
     * @param major the value for tb_user.major
     *
     * @mbggenerated
     */
    public void setMajor(String major) {
        this.major = major == null ? null : major.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.grade
     *
     * @return the value of tb_user.grade
     *
     * @mbggenerated
     */
    public String getGrade() {
        return grade;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.grade
     *
     * @param grade the value for tb_user.grade
     *
     * @mbggenerated
     */
    public void setGrade(String grade) {
        this.grade = grade == null ? null : grade.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.school
     *
     * @return the value of tb_user.school
     *
     * @mbggenerated
     */
    public String getSchool() {
        return school;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.school
     *
     * @param school the value for tb_user.school
     *
     * @mbggenerated
     */
    public void setSchool(String school) {
        this.school = school == null ? null : school.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user
     *
     * @mbggenerated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", disabled=").append(disabled);
        sb.append(", createuser=").append(createuser);
        sb.append(", createtime=").append(createtime);
        sb.append(", updateuser=").append(updateuser);
        sb.append(", updatetime=").append(updatetime);
        sb.append(", remark=").append(remark);
        sb.append(", username=").append(username);
        sb.append(", pasword=").append(pasword);
        sb.append(", realname=").append(realname);
        sb.append(", mobilenumber=").append(mobilenumber);
        sb.append(", stuno=").append(stuno);
        sb.append(", sex=").append(sex);
        sb.append(", userrole=").append(userrole);
        sb.append(", major=").append(major);
        sb.append(", grade=").append(grade);
        sb.append(", school=").append(school);
        sb.append("]");
        return sb.toString();
    }
}