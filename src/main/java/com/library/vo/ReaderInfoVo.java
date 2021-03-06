package com.library.vo;

import com.library.pojo.ReaderInfo;
import lombok.Data;

@Data
public class ReaderInfoVo extends ReaderInfo {

    private Integer pageNo = 1;

    private Integer pageSize = 10;

    private String readerTypeName;

    private Integer lendBookNum;

    private Integer lendDays;

    private Integer reservateionDays;


    private String sno;
}
