package com.library.service;

import com.library.mapper.ReaderCardMapper;
import com.library.mapper.ReaderInfoMapper;
import com.library.pojo.ReaderCard;
import com.library.pojo.ReaderInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReaderCardService {
    @Autowired
    private ReaderCardMapper readerCardMapper;

    public boolean addReaderCard(ReaderInfo readerInfo, String password){
        ReaderCard readerCard = new ReaderCard();
        readerCard.setReaderId(readerInfo.getReaderId());
        readerCard.setUsername(readerInfo.getName());
        readerCard.setPassword(password);
        return  readerCardMapper.insertSelective(readerCard)>0;
    }
    public boolean updatePassword(long readerId, String password){
        ReaderCard readerCard = new ReaderCard();
        readerCard.setPassword(password);
        readerCard.setReaderId(readerId);
        return readerCardMapper.updateByPrimaryKeySelective(readerCard)>0;
    }

    public boolean deleteReaderCard(long readerId) {
        return readerCardMapper.deleteByPrimaryKey(readerId) > 0;
    }
}
